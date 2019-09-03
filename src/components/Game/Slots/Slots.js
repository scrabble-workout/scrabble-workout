import React from 'react';
import PropTypes from 'prop-types';

import classes from './Slots.scss';

import { WORD_LENGTH } from '../../../constants/constants';


const Slots = ({ lettersInSlots, clicked }) => (
    <section className={classes.SlotsSection}>
        <ul className={classes.Slots}>

            {[...Array(WORD_LENGTH).keys()]
                .map((i) => lettersInSlots[i])
                .map((letter, index) => (
                    /* eslint-disable react/no-array-index-key */
                    <li key={index} className={classes.Slot}>
                        {letter
                            ? (
                                <span onClick={() => clicked(letter.id, index)}>
                                    {letter.value}
                                </span>
                            )
                            : null}
                    </li>
                ))}

        </ul>
    </section>
);

Slots.propTypes = {
    lettersInSlots: PropTypes.array.isRequired,
    clicked: PropTypes.func,
};

Slots.defaultProps = {
    clicked: () => {},
};

export { Slots };
