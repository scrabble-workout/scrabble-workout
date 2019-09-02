import React from 'react';
import PropTypes from 'prop-types';

import classes from './Slots.scss';

import { WORD_LENGTH } from '../../../constants/constants';
import { generateID } from '../../../helpers';


const Slots = ({ lettersInSlots, clicked }) => (
    <section className={classes.SlotsSection}>
        <ul className={classes.Slots}>

            {[...Array(WORD_LENGTH).keys()].map((i) => {
                const letter = lettersInSlots[i] || null;
                return (
                    <li key={generateID()} className={classes.Slot}>
                        {
                            letter
                                ? (
                                    <span onClick={() => clicked(letter.id, i)}>
                                        {letter.value}
                                    </span>
                                )
                                : null
                        }
                    </li>
                );
            })}

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
