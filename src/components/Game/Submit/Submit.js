import React from 'react';
import PropTypes from 'prop-types';

import classes from './Submit.scss';

const Submit = ({ onSubmit, onSubmitCancel }) => (
    <section className={classes.Submit}>
        <button
            className={classes.Button}
            onClick={onSubmit}
            type="button"
        >
            Sprawdź
        </button>
        <button
            className={classes.Button}
            onClick={onSubmitCancel}
            type="button"
        >
            Anuluj
        </button>
    </section>
);

Submit.propTypes = {
    onSubmit: PropTypes.func,
    onSubmitCancel: PropTypes.func,
};

Submit.defaultProps = {
    onSubmit: () => {},
    onSubmitCancel: () => {},
};

export { Submit };
