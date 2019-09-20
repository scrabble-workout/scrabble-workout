import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

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
        const { words, answer } = this.props;

        let redirect = null;
        if (!answer) {
            redirect = <Redirect to="/game" />;
        }

        let other = 'Słowo nie ma anagramów';
        if (words.length > 1 || (words.length === 1 && !this.isAnswerCorrect())) {
            const otherItems = words
                .filter((word) => word !== answer)
                .map((word) => (
                    <li className={classes.WordListItem} key={word}>
                        {word.toUpperCase()}
                    </li>
                ));
            other = (
                <>
                    <h6 className={classes.SectionHeader}>
                        {this.isAnswerCorrect() ? 'Inne możliwe słowa:' : 'Poprawne słowa to:'}
                    </h6>
                    <ul className={classes.WordList}>{otherItems}</ul>
                </>
            );
        }

        return (
            <main className={classes.Result}>
                {redirect}

                <div className={classes.Answer}>
                    <h6 className={classes.SectionHeader}>Twoje słowo:</h6>
                    <div className={classes.AnswerWord}>
                        {answer.toUpperCase()}
                    </div>
                </div>

                <div className={classes.ResultMessage}>
                    {
                        (this.isAnswerCorrect())
                            ? (
                                <h6 className={classes.SectionHeader}>
                                    <i className={classNames('fas fa-check fa-3x', classes.ResultIcon)} />
                                    Gratulacje, jest to poprawna odpowiedź!
                                </h6>
                            )
                            : (
                                <h6 className={classes.SectionHeader}>
                                    <i className={classNames('fas fa-times fa-3x', classes.ResultIcon)} />
                                    Nie udało się, może następnym razem.
                                </h6>
                            )
                    }
                </div>

                <div className={classes.Other}>
                    {other}
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
