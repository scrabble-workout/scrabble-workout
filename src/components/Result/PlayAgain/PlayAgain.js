import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PlayAgain.scss';

const PlayAgain = () => (
    <div className={classes.PlayAgainSection}>
        <Link
            to="/game"
            replace
            className={classes.PlayAgainBtn}
            type="button"
        >
            Zagraj ponownie
        </Link>
    </div>
);

export { PlayAgain };
