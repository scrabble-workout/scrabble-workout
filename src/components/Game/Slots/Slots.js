import React from 'react';
import PropTypes from 'prop-types';

import classes from './Slots.scss';

const Slots = ({ lettersInSlots, clicked }) => {
    const slotsNodes = lettersInSlots.map((letter, index) => (
        <li
            key={letter.id}
            className={classes.Slot}
            onClick={() => clicked(letter.id, index)}
        >
            {letter.value}
        </li>
    ));

    return (
        <section className={classes.SlotsSection}>
            <ul className={classes.Slots}>
                {slotsNodes}
            </ul>
            <div className={classes.SlotBottom} />
            <div className={classes.SlotBottom} />
            <div className={classes.SlotBottom} />
            <div className={classes.SlotBottom} />
            <div className={classes.SlotBottom} />
            <div className={classes.SlotBottom} />
            <div className={classes.SlotBottom} />
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
