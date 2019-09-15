import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ResultView = ({ correctWords, submittedAnswer }) => {
    const isAnswerCorrect = () => correctWords.includes(submittedAnswer);

    return (
        <div>
            {
                (isAnswerCorrect())
                    ? 'gratulacje, wygrałeś'
                    : (
                        `nie udało się, może następnym razem.
                        poprawne słowa to:
                        ${correctWords
                            .map((word) => word.toUpperCase())
                            .join(', ')}`
                    )
            }
        </div>
    );
};

ResultView.propTypes = {
    correctWords: PropTypes.array.isRequired,
    submittedAnswer: PropTypes.string.isRequired,
};

const mapStateToProps = ({
    initGame: { correctWords },
    submitAnswer: { submittedAnswer },
}) => ({ correctWords, submittedAnswer });

const Result = connect(mapStateToProps)(ResultView);
export { Result };
