import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './ResultMessage.scss';

const ResultMessage = ({ isAnswerCorrect }) => (
    <div className={classes.MessageSection}>
        {
            isAnswerCorrect
                ? (
                    <h3 className={classes.MessageHeader}>
                        <i className={classNames('fas fa-check fa-3x', classes.MessageIcon)} />
                        Gratulacje, jest to poprawna odpowiedź!
                    </h3>
                )
                : (
                    <h2 className={classes.MessageHeader}>
                        <i className={classNames('fas fa-times fa-3x', classes.MessageIcon)} />
                        Nie udało się, może następnym razem
                    </h2>
                )
        }
    </div>
);

ResultMessage.propTypes = {
    isAnswerCorrect: PropTypes.bool.isRequired,
};

export { ResultMessage };
