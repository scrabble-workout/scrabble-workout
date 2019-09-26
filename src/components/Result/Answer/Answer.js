import React from 'react';
import PropTypes from 'prop-types';
import classes from './Answer.scss';

const Answer = ({ answer }) => (
    <div className={classes.AnswerSection}>
        <h2 className={classes.AnswerHeader}>
            {answer ? 'Twoje słowo:' : 'Nie ułożyłaś/eś słowa'}
        </h2>
        {
            answer
                ? (
                    <div className={classes.Answer}>
                        {answer}
                    </div>
                )
                : null
        }
    </div>
);

Answer.propTypes = {
    answer: PropTypes.string.isRequired,
};

export { Answer };
