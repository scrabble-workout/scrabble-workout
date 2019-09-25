import React from 'react';
import PropTypes from 'prop-types';

import classes from './Slots.scss';
import { WORD_LENGTH } from '../../../config/config';

const Slots = ({ lettersInSlots }) => (
    <section className={classes.SlotsSection}>
        <ul className={classes.Slots}>

            {[...Array(WORD_LENGTH).keys()]
                .map((i) => lettersInSlots[i])
                .map((letter, index) => (
                    /* eslint-disable react/no-array-index-key */
                    <li key={index} className={classes.Slot}>
                        {letter
                            ? (
                                <span>
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
};

export { Slots };
