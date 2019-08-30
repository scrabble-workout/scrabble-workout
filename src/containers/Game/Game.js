import React, { Component } from 'react';

import classes from './Game.scss';
import { Slots } from '../../components/Slots/Slots';
import { Letters } from '../../components/Letters/Letters';

import { words } from '../../data/data';

const generateID = () => `_${Math.random().toString(36).substr(2)}`;

words.map((el) => (
    {
        ...el,
        id: generateID(),
    }
));

class Game extends Component {
    state = {
        wordsNumber: words.length,
        word: {},
        wordLetters: [],
        shuffledLetters: [],
        lettersInSlots: [],
    };

    componentDidMount() {
        const { wordsNumber } = this.state;

        const index = Math.floor(Math.random() * wordsNumber);
        const word = words[index];
        console.log(word.value);
        const lettersObjects = word.value.split('')
            .map((letter) => ({
                value: letter,
                id: generateID(),
                active: true,
            }));

        this.setState({
            word,
            wordLetters: lettersObjects,
            shuffledLetters: this.shuffleArray(lettersObjects),
        });
    }

    shuffleArray = (arr) => {
        let currIndex = arr.length;
        let tempValue;
        let randomIndex;

        while (currIndex) {
            randomIndex = Math.floor(Math.random() * currIndex);
            currIndex -= 1;

            tempValue = arr[currIndex];
            // eslint-disable-next-line
            arr[currIndex] = arr[randomIndex];
            // eslint-disable-next-line
            arr[randomIndex] = tempValue;
        }

        return arr;
    };

    toggleLettersActiveState = (id) => {
        const { wordLetters } = this.state;

        const index = wordLetters.findIndex((el) => el.id === id);
        wordLetters[index].active = !wordLetters[index].active;
        this.setState({
            wordLetters,
        });
    };

    handleLetterClick = (id) => {
        const { wordLetters, lettersInSlots } = this.state;
        const letterSelected = wordLetters
            .find((el) => el.id === id);

        if (!letterSelected.active) {
            return;
        }

        this.toggleLettersActiveState(id);

        this.setState({
            lettersInSlots: [...lettersInSlots, letterSelected],
        });

        if ([...lettersInSlots, letterSelected].length === 7) {
            setTimeout(() => {
                console.log('game over');
                this.checkResult();
            }, 500);
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
        const { word, lettersInSlots } = this.state;
        const result = this.joinLetters(lettersInSlots);

        if (result === word.value) {
            console.log('brawo');
        } else {
            this.checkAnagrams()
                ? console.log('brawo')
                : console.log('o sorry, może następnym razem');
        }
    };

    checkAnagrams = () => {
        const { word, lettersInSlots } = this.state;
        const result = this.joinLetters(lettersInSlots);

        return word.anagrams.indexOf(result) >= 0;
    };

    render() {
        const { lettersInSlots, shuffledLetters } = this.state;

        return (
            <main className={classes.Game}>
                <Slots
                    lettersInSlots={lettersInSlots}
                    clicked={this.handleSlotClick}
                />
                <Letters
                    letters={shuffledLetters}
                    clicked={this.handleLetterClick}
                />
            </main>
        );
    }
}

export { Game };
