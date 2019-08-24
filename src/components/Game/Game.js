import React from 'react';
import classes from './Game.scss';

const Game = () => {
    const letterClasses = [
        classes.Letter,
        classes.Inactive,
    ];

    return (
        <main className={classes.Game}>
            <section className={classes.Cells}>
                <div className={classes.Cell}>a</div>
                <div className={classes.Cell}>t</div>
                <div className={classes.Cell}>l</div>
                <div className={classes.Cell}></div>
                <div className={classes.Cell}></div>
                <div className={classes.Cell}></div>
                <div className={classes.Cell}></div>
            </section>
            <section className={classes.Letters}>
                <div className={classes.LettersRow}>
                    <div className={letterClasses.join(' ')}>a</div>
                    <div className={classes.Letter}>s</div>
                </div>
                <div className={classes.LettersRow}>
                    <div className={letterClasses.join(' ')}>t</div>
                    <div className={classes.Letter}>r</div>
                    <div className={classes.Letter}>k</div>
                </div>
                <div className={classes.LettersRow}>
                    <div className={letterClasses.join(' ')}>l</div>
                    <div className={classes.Letter}>q</div>
                </div>
            </section>
        </main>
    );
};

export { Game };
