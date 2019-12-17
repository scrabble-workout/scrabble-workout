import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Slots.scss';
import { WORD_LENGTH } from '../../../config/config';

const Slots = ({ currentAnswer }) => (
    <section className={classes.SlotsSection}>
        <ul className={classes.Slots}>

            {[...Array(WORD_LENGTH).keys()]
                .map((i) => currentAnswer[i])
                .map((letter, index) => (
                    /* eslint-disable react/no-array-index-key */
                    <li
                        key={index}
                        className={classNames(
                            classes.Slot,
                            !letter ? classes.Empty : null,
                        )}
                    >
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
    currentAnswer: PropTypes.array.isRequired,
};

export { Slots };
