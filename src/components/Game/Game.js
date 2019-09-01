import React, { Component } from 'react';

import classes from './Game.scss';
import { Slots } from './Slots/Slots';
import { Letters } from './Letters/Letters';

import { words } from '../../data/data';

import { WORD_LENGTH, WORDS_COUNT } from '../../constants/constants';
import { shuffleArray } from '../../helpers/shuffle-array';
import { generateID } from '../../helpers/generate-id';
import { getRandomIndexInRange } from '../../helpers/random-index';


class Game extends Component {
    state = {
        correctWords: [],
        letters: [],
        lettersInSlots: [],
        gameWon: null,
    };

    componentDidMount() {
        const index = getRandomIndexInRange(WORDS_COUNT);
        const word = words[index][0];
        const lettersObjects = word.split('')
            .map((letter) => ({
                value: letter,
                id: generateID(),
                active: true,
            }));

        this.setState({
            correctWords: words[index],
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

        if (!letterSelected.active) {
            return;
        }

        this.toggleLettersActiveState(id);

        this.setState({
            lettersInSlots: [...lettersInSlots, letterSelected],
        });

        if ([...lettersInSlots, letterSelected].length === WORD_LENGTH) {
            setTimeout(() => {
                this.checkResult();
            }, 300);
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

    checkResult = () => {
        const { correctWords, lettersInSlots } = this.state;
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
                    typeof gameWon === 'object'
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
