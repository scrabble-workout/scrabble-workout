import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Timer.scss';
import { formatTimeLeft } from '../../../helpers';
import { DURATION, INTERVAL } from '../../../constants/constants';


class Timer extends Component {
    state = {
        timeLeft: DURATION,
    };

    start = new Date().getTime();

    componentDidMount() {
        this.setState({
            timeLeft: this.getTimeLeft(new Date()),
        });
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    getTimeLeft(now) {
        return DURATION - (now.getTime() - this.start);
    }

    startTimer = () => {
        const { timeIsOver } = this.props;

        this.interval = setInterval(() => {
            this.setState({
                timeLeft: this.getTimeLeft(new Date()),
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
                <span>{formatTimeLeft(timeLeft)}</span>
            </div>
        );
    }
}

Timer.propTypes = {
    timeIsOver: PropTypes.func.isRequired,
};

export { Timer };
