import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Result.scss';
import { submitAnswer } from '../../../store/actions/answer';
import { Answer } from './Answer/Answer';
import { ResultMessage } from './ResultMessage/ResultMessage';
import { OtherWords } from './OtherWords/OtherWords';
import { PlayAgain } from './PlayAgain/PlayAgain';

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

        const otherWords = words.filter((word) => word !== answer);

        return (
            <main className={classes.Result}>
                {!answer ? <Redirect to="/game" /> : null}

                <Answer answer={answer.toUpperCase()} />
                <ResultMessage isAnswerCorrect={this.isAnswerCorrect()} />
                <OtherWords
                    isAnswerCorrect={this.isAnswerCorrect()}
                    otherWords={otherWords}
                />
                <PlayAgain clicked={this.handlePlayAgainClick} />
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

const mapStateToProps = ({ words, answer }) => ({ words, answer });

const Result = connect(mapStateToProps)(ResultView);
export { Result };
