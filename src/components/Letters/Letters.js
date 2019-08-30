import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Letters.scss';

const Letters = ({ letters, clicked }) => {
    const getLetterClasses = (i, active) => classNames(
        classes.Letter,
        classes[`Letter-${i + 1}`],
        { [classes.Inactive]: !active },
    );

    const lettersNodes = letters
        .map((letter, i) => (
            <li
                className={getLetterClasses(i, letter.active)}
                key={letter.id}
                onClick={() => clicked(letter.id)}
            >
                {letter.value}
            </li>
        ));

    return (
        <section className={classes.Letters}>
            <ul className={classes.LettersContainer}>
                {lettersNodes}
            </ul>
        </section>
    );
};

Letters.propTypes = {
    letters: PropTypes.array.isRequired,
    clicked: PropTypes.func,
};

Letters.defaultProps = {
    clicked: () => {},
};

export { Letters };
