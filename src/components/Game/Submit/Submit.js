import React from 'react';
import PropTypes from 'prop-types';

import classes from './Submit.scss';

const Submit = ({ onSubmit, onCancel }) => (
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
            onClick={onCancel}
            type="button"
        >
            Anuluj
        </button>
    </section>
);

Submit.propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
};

Submit.defaultProps = {
    onSubmit: () => {},
    onCancel: () => {},
};

export { Submit };
