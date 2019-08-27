import React from 'react';
import classes from './Letters.scss';

const Letters = () => {
    const letterClasses = [
        classes.Letter,
        classes.Inactive,
    ];

    return (
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
    );
};

export {Letters};
