import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Result.scss';
import { submitAnswer } from '../../store/actions/answer';
import { Answer } from './Answer/Answer';
import { ResultMessage } from './ResultMessage/ResultMessage';
import { OtherWords } from './OtherWords/OtherWords';
import { PlayAgain } from './PlayAgain/PlayAgain';

class ResultView extends Component {
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(submitAnswer(null));
    }

    isAnswerCorrect = () => {
        const { words, answer } = this.props;
        return words.includes(answer);
    };

    render() {
        const { words, answer } = this.props;
        const otherWords = words.filter((word) => word !== answer);

        if (typeof answer !== 'string') {
            return <Redirect to="/" />;
        }

        return (
            <main className={classes.Result}>

                <Answer answer={answer.toUpperCase()} />
                <ResultMessage isAnswerCorrect={this.isAnswerCorrect()} />
                <OtherWords
                    isAnswerCorrect={this.isAnswerCorrect()}
                    otherWords={otherWords}
                />
                <PlayAgain />
            </main>
        );
    }
}

ResultView.propTypes = {
    words: PropTypes.array.isRequired,
    answer: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
};

ResultView.defaultProps = {
    answer: null,
};

const mapStateToProps = ({ words, answer }) => ({ words, answer });

const Result = connect(mapStateToProps)(ResultView);
export { Result };
