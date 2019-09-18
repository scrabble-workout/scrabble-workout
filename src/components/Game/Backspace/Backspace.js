import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backspace.scss';

const Backspace = ({ clicked, lettersInSlotsLength }) => (
    <div className={classes.Backspace}>
        <button
            onClick={clicked}
            className={classes.Button}
            disabled={!lettersInSlotsLength}
            type="button"
        >
            <i className="fas fa-backspace fa-2x" />
        </button>
    </div>
);

Backspace.propTypes = {
    clicked: PropTypes.func,
    lettersInSlotsLength: PropTypes.number.isRequired,
};

Backspace.defaultProps = {
    clicked: () => {},
};

export { Backspace };
