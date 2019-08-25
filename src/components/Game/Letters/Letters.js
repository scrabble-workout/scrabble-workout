import React from 'react';
import classNames from 'classnames';
import classes from './Letters.scss';

const Letters = ({ letters, clicked }) => {
    const lettersNodes = letters
        .map((letter) => {
            return <div
                className={classes.Letter}
                key={letter.id}
                onClick={() => clicked(letter.id)}
            >
                {letter.letter}
            </div>
        });

    return (
        <section className={classes.Letters}>
            <div className={classes.LettersContainer}>
                {lettersNodes}
            </div>
        </section>
    );
};

export { Letters };
