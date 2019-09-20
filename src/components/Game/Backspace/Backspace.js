import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backspace.scss';

const Backspace = ({ clicked, areSlotsEmpty, isSubmitVisible }) => (
    <button
        onClick={clicked}
        className={classes.BackspaceBtn}
        disabled={areSlotsEmpty || isSubmitVisible}
        type="button"
    >
        <i className="fas fa-backspace fa-2x" />
    </button>
);

Backspace.propTypes = {
    clicked: PropTypes.func,
    areSlotsEmpty: PropTypes.bool.isRequired,
    isSubmitVisible: PropTypes.bool.isRequired,
};

Backspace.defaultProps = {
    clicked: () => {},
};

export { Backspace };
