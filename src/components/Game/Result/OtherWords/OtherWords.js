import React from 'react';
import PropTypes from 'prop-types';
import classes from './OtherWords.scss';

const OtherWords = ({ isAnswerCorrect, otherWords }) => {
    const otherWordsItems = otherWords
        .map((word) => (
            <li className={classes.WordListItem} key={word}>
                {word.toUpperCase()}
            </li>
        ));

    const singularOrPluralForm = otherWords.length > 1 ? 'słowa' : 'słowo';

    return (
        <div className={classes.OtherSection}>
            {
                !otherWords.length
                    ? <h2 className={classes.OtherHeader}>Słowo nie ma anagramów</h2>
                    : (
                        <>
                            <h2 className={classes.OtherHeader}>
                                {isAnswerCorrect
                                    ? `Inne możliwe ${singularOrPluralForm}:`
                                    : `Poprawne ${singularOrPluralForm} to:`}
                            </h2>
                            <ul className={classes.WordList}>
                                {otherWordsItems}
                            </ul>
                        </>
                    )
            }
        </div>
    );
};

OtherWords.propTypes = {
    isAnswerCorrect: PropTypes.bool.isRequired,
    otherWords: PropTypes.array.isRequired,
};

export { OtherWords };
