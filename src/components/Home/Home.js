import React from 'react';
import classes from './Home.scss';

import { Button } from '../Button/Button';

const Home = () => (
    <main className={classes.Home}>
        <h2 className={classes.Header}>Home Screen</h2>
        <Button />
    </main>
);

export { Home };
