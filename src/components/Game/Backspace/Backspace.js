import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backspace.scss';

const Backspace = ({ clicked, disabled }) => (
    <button
        onClick={clicked}
        className={classes.BackspaceBtn}
        disabled={disabled}
        type="button"
    >
        <i className="fas fa-backspace fa-2x" />
    </button>
);

Backspace.propTypes = {
    clicked: PropTypes.func,
    disabled: PropTypes.bool.isRequired,
};

Backspace.defaultProps = {
    clicked: () => {},
};

export { Backspace };
