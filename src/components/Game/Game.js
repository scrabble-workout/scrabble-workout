import React from 'react';
import classes from './Game.scss';

import { Cells } from '../Cells/Cells';
import { Letters } from '../Letters/Letters';

const Game = () => (
    <main className={classes.Game}>
        <Cells />
        <Letters />
    </main>
);

export { Game };
