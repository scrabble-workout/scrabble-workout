import React from 'react';
import PropTypes from 'prop-types';
import classes from './Answer.scss';

const Answer = ({ answer }) => (
    <div className={classes.AnswerSection}>
        <h2 className={classes.AnswerHeader}>Twoje słowo:</h2>
        <div className={classes.Answer}>
            {answer}
        </div>
    </div>
);

Answer.propTypes = {
    answer: PropTypes.string.isRequired,
};

export { Answer };
