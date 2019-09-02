import React, { Component } from 'react';

import classes from './Game.scss';
import { Slots } from './Slots/Slots';
import { Letters } from './Letters/Letters';

import { WORD_LENGTH } from '../../constants/constants';
import { shuffleArray, generateID } from '../../helpers';
import { getCorrectWords, getRandomWord } from '../../service/service';


class Game extends Component {
    state = {
        correctWords: [],
        letters: [],
        lettersInSlots: [],
        gameWon: undefined,
    };

    componentDidMount() {
        const word = getRandomWord();
        const lettersObjects = word.split('')
            .map((letter) => ({
                value: letter,
                id: generateID(),
                active: true,
            }));

        this.setState({
            correctWords: getCorrectWords(),
            letters: shuffleArray(lettersObjects),
        });
    }

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
        const updatedlettersInSlots = [...lettersInSlots, letterSelected];

        this.setState({
            lettersInSlots: updatedlettersInSlots,
        });

        if (updatedlettersInSlots.length === WORD_LENGTH) {
            this.checkResult(updatedlettersInSlots);
        }
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

    checkResult = (lettersInSlots) => {
        const { correctWords } = this.state;
        const result = this.joinLetters(lettersInSlots);

        this.setState({
            gameWon: correctWords.includes(result),
        });
    };

    render() {
        const { letters, lettersInSlots, gameWon } = this.state;

        return (
            <main className={classes.Game}>
                <Slots
                    lettersInSlots={lettersInSlots}
                    clicked={this.handleSlotClick}
                />
                {
                    gameWon === undefined
                        ? (
                            <Letters
                                letters={letters}
                                clicked={this.handleLetterClick}
                            />
                        )
                        : (
                            <div>
                                {
                                    (gameWon)
                                        ? 'gratulacje, wygrałeś'
                                        : 'nie udało się, może następnym razem'
                                }
                            </div>
                        )
                }
            </main>
        );
    }
}

export { Game };
