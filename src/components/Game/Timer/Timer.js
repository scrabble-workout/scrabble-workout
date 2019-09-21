import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
    state = {
        seconds: 3,
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

            if (seconds > 1) {
                this.decrement();
            } else {
                this.decrement();
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

    printTwoDigits = (number) => number.toString().padStart(2, '0');

    computeSeconds = (seconds) => seconds % 60;

    computeMinutes = (seconds) => (seconds - (seconds % 60)) / 60;

    render() {
        const { seconds } = this.state;
        console.log(seconds);

        return (
            <div>
                <span>
                    {this.computeMinutes(seconds)}
                </span>
                <span>:</span>
                <span>
                    {this.printTwoDigits(this.computeSeconds(seconds))}
                </span>
            </div>
        );
    }
}

Timer.propTypes = {
    timeIsOver: PropTypes.func.isRequired,
};

export { Timer };
