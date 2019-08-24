import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.scss';

const Button = () => (
    <Link to="/game" className={classes.Button}>
        Zagraj
    </Link>
);

export { Button };
