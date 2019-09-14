import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Result = ({ gameWon, correctWords }) => (
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

Result.propTypes = {
    gameWon: PropTypes.bool,
    correctWords: PropTypes.array.isRequired,
};

Result.defaultProps = {
    gameWon: undefined,
};

const mapStateToProps = (state) => (
    {
        correctWords: state.correctWords,
    }
);

export default connect(mapStateToProps)(Result);
