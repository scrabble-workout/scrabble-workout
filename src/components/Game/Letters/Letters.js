import React from 'react';
import classNames from 'classnames';
import classes from './Letters.scss';

const Letters = () => {
    const letterClasses = classNames(
        classes.Letter,
        classes.Inactive,
    );

    return (
        <section className={classes.Letters}>
            <div className={classes.LettersRow}>
                <div className={letterClasses}>a</div>
                <div className={classes.Letter}>s</div>
            </div>
            <div className={classes.LettersRow}>
                <div className={letterClasses}>t</div>
                <div className={classes.Letter}>r</div>
                <div className={classes.Letter}>k</div>
            </div>
            <div className={classes.LettersRow}>
                <div className={letterClasses}>l</div>
                <div className={classes.Letter}>q</div>
            </div>
        </section>
    );
};

export { Letters };
