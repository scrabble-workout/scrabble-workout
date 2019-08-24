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
        word: '',
        shuffledLetters: [],
        lettersInCells: [],
    };

    componentDidMount() {
        const index = Math.floor(Math.random() * this.state.wordsNumber);
        const word = words[index].word;
        console.log(word);
        const letters = this.shuffleArray(word.split(''));

        this.setState({
            word: word,
            shuffledLetters: letters,
        });
    }

    shuffleArray = arr => {
        let currIndex = arr.length;
        let tempValue;
        let randomIndex;

        while (currIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currIndex);
            currIndex--;

            tempValue = arr[currIndex];
            arr[currIndex] = arr[randomIndex];
            arr[randomIndex] = tempValue;
        }

        return arr;
    };

    handleLetterClick = (i) => {
        const { shuffledLetters, lettersInCells } = this.state;
        const letterSelected = shuffledLetters[i];

        this.setState({
            lettersInCells: [...lettersInCells, letterSelected],
        });

        if ([...lettersInCells, letterSelected].length === 7) {
            setTimeout(() => {
                console.log('game over');
            }, 500);
        }
    };

    handleCellClick = (i) => {
        console.log('test', i);
    };

    render() {
        console.log(this.state.lettersInCells);

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
