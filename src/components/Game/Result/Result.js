import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ResultView = ({ words, answer }) => {
    const isAnswerCorrect = () => words.includes(answer);

    return (
        <div>
            {
                (isAnswerCorrect())
                    ? 'gratulacje, wygrałeś'
                    : (
                        `nie udało się, może następnym razem.
                        poprawne słowa to:
                        ${words
                            .map((word) => word.toUpperCase())
                            .join(', ')}`
                    )
            }
        </div>
    );
};

ResultView.propTypes = {
    words: PropTypes.array.isRequired,
    answer: PropTypes.string.isRequired,
};

const mapStateToProps = ({
    words,
    answer,
}) => ({ words, answer });

const Result = connect(mapStateToProps)(ResultView);
export { Result };
