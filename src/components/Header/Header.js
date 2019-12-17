import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.scss';

const Header = () => (
    <header>
        <h1 className={classes.Header}>
            <Link className={classes.HeaderLink} to="/">Scrabble Workout!</Link>
        </h1>
    </header>
);

export { Header };
