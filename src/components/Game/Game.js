import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './Game.scss';
import { Slots } from './Slots/Slots';
import { Letters } from './Letters/Letters';
import { Result } from './Result/Result';

import { WORD_LENGTH } from '../../constants/constants';
import { shuffleArray, generateID } from '../../helpers';
import { initWords } from '../../store/actions/init-words';
import { submitAnswer } from '../../store/actions/answer';

class GameView extends Component {
    state = {
        letters: [],
        lettersInSlots: [],
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(initWords());
    }

    componentDidUpdate(prevProps) {
        const { words } = this.props;
        if (words !== prevProps.words) {
            this.initLetters(words);
        }
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(submitAnswer(''));
    }

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

    handleLetterClick = (id) => {
        const { dispatch } = this.props;
        const { letters, lettersInSlots } = this.state;
        const letterSelected = letters
            .find((el) => el.id === id);

        this.toggleLettersActiveState(id);
        const updatedLettersInSlots = [...lettersInSlots, letterSelected];

        this.setState({
            lettersInSlots: updatedLettersInSlots,
        }, () => {
            if (updatedLettersInSlots.length === WORD_LENGTH) {
                dispatch(submitAnswer(this.joinLetters(updatedLettersInSlots)));
            }
        });
    };

    handleSlotClick = (id, i) => {
        const { lettersInSlots } = this.state;

        if (i !== lettersInSlots.length - 1) {
            return;
        }

        this.toggleLettersActiveState(id);
        lettersInSlots.pop();

        this.setState({
            lettersInSlots,
        });
    };

    joinLetters = (arr) => arr.reduce((a, b) => a + b.value, '');

    render() {
        const { answer } = this.props;
        const { letters, lettersInSlots } = this.state;

        return (
            <main className={classes.Game}>
                <Slots
                    lettersInSlots={lettersInSlots}
                    clicked={this.handleSlotClick}
                />
                {
                    !answer
                        ? (
                            <Letters
                                letters={letters}
                                clicked={this.handleLetterClick}
                            />
                        )
                        : <Result />
                }
            </main>
        );
    }
}

GameView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    words: PropTypes.array.isRequired,
    answer: PropTypes.string.isRequired,
};

const mapStateToProps = ({
    words,
    answer,
}) => ({ words, answer });

const Game = connect(mapStateToProps)(GameView);
export { Game };
