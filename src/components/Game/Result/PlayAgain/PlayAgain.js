import React from 'react';
import PropTypes from 'prop-types';
import classes from './PlayAgain.scss';

const PlayAgain = ({ clicked }) => (
    <div className={classes.PlayAgainSection}>
        <button
            className={classes.PlayAgainBtn}
            onClick={clicked}
            type="button"
        >
            Zagraj ponownie
        </button>
    </div>
);

PlayAgain.propTypes = {
    clicked: PropTypes.func.isRequired,
};

export { PlayAgain };
