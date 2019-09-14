import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ResultView = ({ gameWon, correctWords }) => (
    <div>
        {
            (gameWon)
                ? 'gratulacje, wygrałeś'
                : (
                    `nie udało się, może następnym razem.
                    poprawne słowa to:
                    ${correctWords.map((word) => word.toUpperCase()).join(', ')}`
                )
        }
    </div>
);

ResultView.propTypes = {
    gameWon: PropTypes.bool.isRequired,
    correctWords: PropTypes.array.isRequired,
};

const mapStateToProps = ({ correctWords }) => ({ correctWords });

const Result = connect(mapStateToProps)(ResultView);
export { Result };
