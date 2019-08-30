import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.scss';

const Header = () => (
    <header className={classes.Header}>
        <Link className={classes.HeaderLink} to="/">Scrabble Workout!</Link>
    </header>
);

export { Header };
