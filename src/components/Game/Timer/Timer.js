import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { computeMinutes, computeSeconds, printTwoDigits } from '../../../helpers';

class Timer extends Component {
    state = {
        // 60 sec. only for testing reasons. it's gonna be more :)
        seconds: 60,
    };

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    startTimer = () => {
        const { timeIsOver } = this.props;

        this.interval = setInterval(() => {
            const { seconds } = this.state;

            this.decrement();
            if (seconds <= 1) {
                this.stopTimer();
                timeIsOver();
            }
        }, 1000);
    };

    decrement = () => {
        this.setState((state) => ({
            seconds: state.seconds - 1,
        }));
    };

    stopTimer = () => {
        clearInterval(this.interval);
    };

    render() {
        const { seconds } = this.state;

        return (
            <div>
                <span>
                    {computeMinutes(seconds)}
                </span>
                <span>:</span>
                <span>
                    {printTwoDigits(computeSeconds(seconds))}
                </span>
            </div>
        );
    }
}

Timer.propTypes = {
    timeIsOver: PropTypes.func.isRequired,
};

export { Timer };
