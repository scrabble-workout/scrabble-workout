import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import classNames from 'classnames';

import classes from './Game.scss';
import { Slots } from './Slots/Slots';
import { Backspace } from './Backspace/Backspace';
import { Letters } from './Letters/Letters';
import { Submit } from './Submit/Submit';
import { Timer } from './Timer/Timer';

import { WORD_LENGTH } from '../../config/config';
import { shuffleArray, generateID, isScreenSmall } from '../../helpers';
import { initWords } from '../../store/actions/init-words';
import { submitAnswer } from '../../store/actions/submit-answer';


class GameView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letters: [],
            currentAnswer: [],
            isSubmitVisible: false,
            dragActive: this.getDragActive(),
        };
        this.handleResize = this.handleResize.bind(this);
        this.debouncedResizeListener = debounce(this.handleResize, 50);
    }

    componentDidMount() {
        const { allWords, dispatch } = this.props;

        if (allWords.length) {
            dispatch(initWords(allWords));
        }

        window.addEventListener('resize', this.debouncedResizeListener);
    }

    componentDidUpdate(prevProps) {
        const { allWords, words, dispatch } = this.props;

        if (allWords !== prevProps.allWords) {
            dispatch(initWords(allWords));
        }

        if (words !== prevProps.words && words.length) {
            this.initLetters(words);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.debouncedResizeListener);
    }

    getDragActive = () => !isScreenSmall();

    handleResize = () => {
        const { letters, currentAnswer, dragActive } = this.state;
        const dragActiveOnResizeEnd = this.getDragActive();

        if (dragActiveOnResizeEnd === dragActive) {
            return;
        }

        let newState = {
            dragActive: dragActiveOnResizeEnd,
        };

        if (dragActiveOnResizeEnd) {
            const lettersOutsideSlots = letters
                .filter((letter) => letter.active);

            const currentAnswerOnDesktop = currentAnswer
                .concat(lettersOutsideSlots);

            newState = {
                ...newState,
                letters: this.setAllLettersActiveState(currentAnswerOnDesktop, true),
                currentAnswer: [...currentAnswerOnDesktop],
                isSubmitVisible: false,
            };
        } else {
            newState = {
                ...newState,
                letters: this.setAllLettersActiveState(letters, false),
                currentAnswer: [...letters],
                isSubmitVisible: true,
            };
        }
        this.setState(newState);
    };

    initLetters = (words) => {
        const lettersObjects = words[0].split('')
            .map((letter) => ({
                value: letter,
                id: generateID(),
                active: true,
            }));
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
            letters: shuffleArray(lettersObjects),
        }, this.initCurrentAnswer);
    };

    initCurrentAnswer = () => {
        if (isScreenSmall()) {
            return;
        }
        const { letters } = this.state;

        this.setState({
            currentAnswer: [...letters],
        });
    };

    toggleLettersActiveState = (id) => {
        const { letters } = this.state;

        const index = letters.findIndex((el) => el.id === id);
        letters[index].active = !letters[index].active;
        this.setState({
            letters,
        });
    };

    setAllLettersActiveState = (letters, isActive) => {
        const updatedLetters = letters;
        updatedLetters.forEach((letter, index) => {
            updatedLetters[index].active = isActive;
        });
        return updatedLetters;
    };

    handleLetterClick = (id) => {
        if (!isScreenSmall()) {
            return;
        }

        const { letters, currentAnswer } = this.state;
        const letterSelected = letters
            .find((el) => el.id === id);

        this.toggleLettersActiveState(id);
        const updatedCurrentAnswer = [...currentAnswer, letterSelected];

        this.setState({
            currentAnswer: updatedCurrentAnswer,
        }, () => {
            if (updatedCurrentAnswer.length === WORD_LENGTH) {
                this.setState({
                    isSubmitVisible: true,
                });
            }
        });
    };

    handleDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        const { letters } = this.state;

        if (!destination || destination.index === source.index) {
            return;
        }

        const movedLetter = letters[source.index];
        const updatedLetters = letters
            .filter((letter) => letter.id !== draggableId);
        updatedLetters.splice(destination.index, 0, movedLetter);

        this.setState({
            letters: updatedLetters,
            currentAnswer: [...updatedLetters],
        });
    };

    handleBackspaceClick = () => {
        const { currentAnswer } = this.state;
        const lastLetterID = currentAnswer[currentAnswer.length - 1].id;

        this.toggleLettersActiveState(lastLetterID);
        currentAnswer.pop();

        this.setState({
            currentAnswer: [...currentAnswer],
        });
    };

    submit = () => {
        const { currentAnswer } = this.state;
        const { dispatch, history } = this.props;

        dispatch(submitAnswer(
            currentAnswer.length === WORD_LENGTH
                ? this.joinLetters(currentAnswer)
                : '',
        ));
        history.replace('/result');
    };

    onSubmit = () => {
        this.submit();
    };

    onCancel = () => {
        this.setState({
            isSubmitVisible: false,
        });
    };

    timeIsOver = () => {
        this.submit();
    };

    joinLetters = (arr) => arr.reduce((a, b) => a + b.value, '');

    render() {
        const { loading, error } = this.props;
        const {
            letters,
            currentAnswer,
            isSubmitVisible,
            dragActive,
        } = this.state;

        const gameClasses = loading || error
            ? classNames(
                classes.Game,
                classes.Empty,
            )
            : classes.Game;

        if (loading) {
            return (
                <main className={gameClasses}>
                    <div className={classes.Loader}>Loading&hellip;</div>
                </main>
            );
        }

        if (error) {
            return (
                <main className={gameClasses}>
                    Wystąpił błąd
                </main>
            );
        }

        return (
            <main className={classes.Game}>
                <Timer timeIsOver={this.timeIsOver} />
                <Slots
                    currentAnswer={currentAnswer}
                />
                <Backspace
                    clicked={this.handleBackspaceClick}
                    disabled={currentAnswer.length === 0 || isSubmitVisible}
                />
                {
                    !isSubmitVisible
                        ? (
                            <Letters
                                letters={letters}
                                clicked={this.handleLetterClick}
                                dragActive={dragActive}
                                dragEnd={this.handleDragEnd}
                            />
                        )
                        : (
                            <Submit
                                onSubmit={this.onSubmit}
                                onCancel={this.onCancel}
                                showCancel={!dragActive}
                            />
                        )
                }
                {
                    dragActive
                        ? (
                            <Submit
                                onSubmit={this.onSubmit}
                                onCancel={this.onCancel}
                                showCancel={!dragActive}
                            />
                        )
                        : null
                }
            </main>
        );
    }
}

GameView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    allWords: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    words: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
};

GameView.defaultProps = {
    error: null,
};

const mapStateToProps = ({ allWords: { data: allWords, loading, error }, words }) => (
    { allWords, loading, error, words }
);

const Game = connect(mapStateToProps)(GameView);
export { Game };
