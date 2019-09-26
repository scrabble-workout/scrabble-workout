import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Timer.scss';
import { formatDuration } from '../../../helpers';
import { DURATION, INTERVAL } from '../../../config/config';


class Timer extends Component {
    state = {
        timeLeft: DURATION,
    };

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    getTimeLeft() {
        const { start } = this.state;
        return DURATION - (new Date().getTime() - start);
    }

    startTimer = () => {
        this.setState({
            start: new Date().getTime(),
        }, () => {
            this.updateTimeLeft();
            this.interval = setInterval(this.updateTimeLeft, INTERVAL);
        });
    };

    updateTimeLeft = () => {
        const { timeIsOver } = this.props;

        this.setState({
            timeLeft: this.getTimeLeft(),
        }, () => {
            const { timeLeft } = this.state;
            if (timeLeft <= 0) {
                this.stopTimer();
                timeIsOver();
            }
        });
    };

    stopTimer = () => {
        clearInterval(this.interval);
    };

    render() {
        const { timeLeft } = this.state;

        return (
            <div className={classes.Timer}>
                <span>{formatDuration(timeLeft)}</span>
            </div>
        );
    }
}

Timer.propTypes = {
    timeIsOver: PropTypes.func.isRequired,
};

export { Timer };
