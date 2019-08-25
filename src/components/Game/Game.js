import React, { Component } from 'react';
import classes from './Game.scss';

import { Slots } from './Slots/Slots';
import { Letters } from './Letters/Letters';

import { words } from '../../data/data';

const generateID = () =>
    '_' + Math.random().toString(36).substr(2, 9);

words.map(el => {
    return {
        ...el,
        id: generateID(),
    }
});

class Game extends Component {
    state = {
        wordsNumber: words.length,
        word: {},
        wordLetters: [],
        shuffledLetters: [],
        lettersInCells: [],
    };

    componentDidMount() {
        const index = Math.floor(Math.random() * this.state.wordsNumber);
        const word = words[index];
        console.log(word.value);
        const lettersWithIDs = word.value.split('')
            .map(letter => {
            return {
                letter,
                id: generateID(),
            };
        });

        this.setState({
            word: word,
            wordLetters: lettersWithIDs,
            shuffledLetters: this.shuffleArray(lettersWithIDs),
        });
    }

    shuffleArray = arr => {
        let currIndex = arr.length;
        let tempValue;
        let randomIndex;

        while (currIndex) {
            randomIndex = Math.floor(Math.random() * currIndex--);

            tempValue = arr[currIndex];
            arr[currIndex] = arr[randomIndex];
            arr[randomIndex] = tempValue;
        }

        return arr;
    };

    handleLetterClick = (id) => {
        const { wordLetters, lettersInCells } = this.state;
        const letterSelected = wordLetters
            .find(el => el.id === id).letter;

        this.setState({
            lettersInCells: [...lettersInCells, letterSelected],
        });

        if ([...lettersInCells, letterSelected].length === 7) {
            setTimeout(() => {
                console.log('game over');
                this.checkResult();
            }, 500);
        }
    };

    handleCellClick = (i) => {
        if (i !== this.state.lettersInCells.length - 1) {
            return;
        }

        const { lettersInCells } = this.state;
        lettersInCells.pop();

        this.setState({
            lettersInCells: lettersInCells,
        });
    };

    checkResult = () => {
        const { word, lettersInCells } = this.state;

        if (lettersInCells.join('') === word.value) {
            console.log('brawo');
        } else {
            this.checkAnagrams()
                ? console.log('brawo')
                : console.log('o sorry, może następnym razem');
        }
    };

    checkAnagrams = () => {
        const { word, lettersInCells } = this.state;

        return word.anagrams.indexOf(lettersInCells.join('')) >= 0;
    };

    render() {
        return (
            <main className={classes.Game}>
                <Cells
                    lettersInCells={this.state.lettersInCells}
                    clicked={this.handleCellClick}
                />
                <Letters
                    letters={this.state.shuffledLetters}
                    clicked={this.handleLetterClick}
                />
            </main>
        );
    }
}

export { Game };
