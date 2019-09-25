import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Timer.scss';
import { formatTime } from '../../../helpers';
import { DURATION, INTERVAL } from '../../../constants/constants';


class Timer extends Component {
    state = {
        timeLeft: DURATION,
    };

    // start = new Date().getTime();

    componentDidMount() {
        this.setState({
            timeLeft: this.getTimeLeft(),
        });
        this.updateTimer();
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

        })
    }

    updateTimer = () => {
        const { timeIsOver } = this.props;

        this.interval = setInterval(() => {
            this.setState({
                timeLeft: this.getTimeLeft(),
            }, () => {
                const { timeLeft } = this.state;
                if (timeLeft <= 0) {
                    this.stopTimer();
                    timeIsOver();
                }
            });
        }, INTERVAL);
    };

    stopTimer = () => {
        clearInterval(this.interval);
    };

    render() {
        const { timeLeft } = this.state;

        return (
            <div className={classes.Timer}>
                <span>{formatTime(timeLeft)}</span>
            </div>
        );
    }
}

Timer.propTypes = {
    timeIsOver: PropTypes.func.isRequired,
};

export { Timer };
