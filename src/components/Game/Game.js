import React from 'react';
import classes from './Game.scss';

import { Slots } from './Slots/Slots';
import { Letters } from './Letters/Letters';

const Game = () => (
    <main className={classes.Game}>
        <Slots />
        <Letters />
    </main>
);

export { Game };
