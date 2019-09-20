import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './Result.scss';
import { submitAnswer } from '../../../store/actions/answer';

class ResultView extends Component {
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(submitAnswer(''));
    }

    isAnswerCorrect = () => {
        const { words, answer } = this.props;
        return words.includes(answer);
    };

    handlePlayAgainClick = () => {
        const { history } = this.props;
        history.replace('/game');
    };

    render() {
        const { words } = this.props;

        return (
            <main className={classes.Result}>
                <div className={classes.ResultMessage}>
                    {
                        (this.isAnswerCorrect())
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
                <div className={classes.PlayAgain}>
                    <button
                        className={classes.PlayAgainBtn}
                        onClick={this.handlePlayAgainClick}
                        type="button"
                    >
                        Zagraj ponownie
                    </button>
                </div>
            </main>
        );
    }
}

ResultView.propTypes = {
    words: PropTypes.array.isRequired,
    answer: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object,
};

ResultView.defaultProps = {
    history: {},
};

const Result = connect()(ResultView);
export { Result };
