import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './Game.scss';
import { Slots } from './Slots/Slots';
import { Backspace } from './Backspace/Backspace';
import { Letters } from './Letters/Letters';
import { Submit } from './Submit/Submit';

import { WORD_LENGTH } from '../../constants/constants';
import { shuffleArray, generateID } from '../../helpers';
import { initWords } from '../../store/actions/init-words';
import { submitAnswer } from '../../store/actions/answer';

class GameView extends Component {
    state = {
        letters: [],
        lettersInSlots: [],
        isSubmitVisible: false,
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
        const { letters, lettersInSlots } = this.state;
        const letterSelected = letters
            .find((el) => el.id === id);

        this.toggleLettersActiveState(id);
        const updatedLettersInSlots = [...lettersInSlots, letterSelected];

        this.setState({
            lettersInSlots: updatedLettersInSlots,
        }, () => {
            if (updatedLettersInSlots.length === WORD_LENGTH) {
                this.setState({
                    isSubmitVisible: true,
                });
            }
        });
    };

    handleBackspaceClick = () => {
        const { lettersInSlots } = this.state;
        const lastLetterID = lettersInSlots[lettersInSlots.length - 1].id;

        this.toggleLettersActiveState(lastLetterID);
        lettersInSlots.pop();

        this.setState({
            lettersInSlots,
        });
    };

    onSubmit = () => {
        const { lettersInSlots } = this.state;
        const { dispatch, history } = this.props;
        dispatch(submitAnswer(this.joinLetters(lettersInSlots)));
        history.replace('/game/result');
    };

    onCancel = () => {
        this.setState({
            isSubmitVisible: false,
        });
    };

    joinLetters = (arr) => arr.reduce((a, b) => a + b.value, '');

    render() {
        const { letters, lettersInSlots, isSubmitVisible } = this.state;
        const lettersOrSubmit = !isSubmitVisible
            ? (
                <Letters
                    letters={letters}
                    clicked={this.handleLetterClick}
                />
            )
            : (
                <Submit
                    onSubmit={this.onSubmit}
                    onCancel={this.onCancel}
                />
            );

        return (
            <main className={classes.Game}>
                <Slots
                    lettersInSlots={lettersInSlots}
                />
                <Backspace
                    clicked={this.handleBackspaceClick}
                    areSlotsEmpty={lettersInSlots.length === 0}
                    isSubmitVisible={isSubmitVisible}
                />
                {
                    lettersOrSubmit
                }
            </main>
        );
    }
}

GameView.propTypes = {
    dispatch: PropTypes.func.isRequired,
    words: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = ({
    words,
    answer,
}) => ({ words, answer });

const Game = connect(mapStateToProps)(GameView);
export { Game };
