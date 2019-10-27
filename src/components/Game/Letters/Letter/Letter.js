import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Letter.scss';

const Letter = ({ provided, innerRef, clicked, letter, index }) => (
    <li
        /*eslint-disable react/jsx-props-no-spreading*/
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={innerRef}
        className={classNames(
            classes.Letter,
            classes[`Letter-${index + 1}`],
        )}
    >
        <button
            type="button"
            tabIndex="-1"
            className={classes.LetterButton}
            disabled={!letter.active}
            onClick={() => clicked(letter.id)}
        >
            {letter.value}
        </button>
    </li>
);

Letter.propTypes = {
    provided: PropTypes.object.isRequired,
    innerRef: PropTypes.func.isRequired,
    clicked: PropTypes.func,
    letter: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

Letter.defaultProps = {
    clicked: () => {},
};

export { Letter };
