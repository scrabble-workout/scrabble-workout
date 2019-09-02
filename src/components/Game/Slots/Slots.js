import React from 'react';
import PropTypes from 'prop-types';

import classes from './Slots.scss';

import { WORD_LENGTH } from '../../../constants/constants';
import { generateID } from '../../../helpers';


const Slots = ({ lettersInSlots, clicked }) => {
    const slotsNodes = [];
    let slotIndex = 0;

    while (slotIndex < WORD_LENGTH) {
        const letter = lettersInSlots && lettersInSlots[slotIndex];
        const letterIndex = slotIndex;

        slotsNodes.push(
            <li
                key={generateID()}
                className={classes.Slot}
            >
                {
                    letter
                        ? (
                            <span
                                className={classes.SlotLetter}
                                onClick={() => clicked(letter.id, letterIndex)}
                            >
                                {letter.value}
                            </span>
                        )
                        : null
                }
            </li>,
        );
        slotIndex += 1;
    }

    return (
        <section className={classes.SlotsSection}>
            <ul className={classes.Slots}>
                {slotsNodes}
            </ul>
        </section>
    );
};

Slots.propTypes = {
    lettersInSlots: PropTypes.array.isRequired,
    clicked: PropTypes.func,
};

Slots.defaultProps = {
    clicked: () => {},
};

export { Slots };
