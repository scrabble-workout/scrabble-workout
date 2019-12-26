import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Home.scss';

const Home = () => (
    <main className={classes.Home}>
        <section className={classes.Hero}>
            <div className={classes.HeroBg} />
            <h2 className={classes.HeroHeader}>
                Zostań mistrzem siedmioliterówek!
            </h2>
        </section>
        <section className={classes.StartGame}>
            <Link to="/game" className={classes.StartGameAction}>
                Zagraj
            </Link>
        </section>
    </main>
);

export { Home };
