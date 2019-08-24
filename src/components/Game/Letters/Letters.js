import React from 'react';
import classNames from 'classnames';
import classes from './Letters.scss';

const Letters = ({ letters, clicked }) => {
    const lettersToLoad = letters
        .map((letter, i) => {
            return <div
                className={classes.Letter}
                key={i + letter}
                onClick={() => clicked(i)}
            >
                {letter}
            </div>
        });

    return (
        <section className={classes.Letters}>
            <div className={classes.LettersContainer}>
                {lettersToLoad}
            </div>
        </section>
    );
};

export { Letters };
