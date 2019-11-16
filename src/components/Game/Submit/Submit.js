import React from 'react';
import PropTypes from 'prop-types';

import classes from './Submit.scss';

const Submit = ({ onSubmit, onCancel, isCancelBtnVisible }) => (
    <section className={classes.Submit}>
        <button
            className={classes.Button}
            onClick={onSubmit}
            type="button"
        >
            Sprawdź
        </button>
        {
            isCancelBtnVisible
                ? (
                    <button
                        className={classes.Button}
                        onClick={onCancel}
                        type="button"
                    >
                        Anuluj
                    </button>
                )
                : null
        }
    </section>
);

Submit.propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    isCancelBtnVisible: PropTypes.bool.isRequired,
};

Submit.defaultProps = {
    onSubmit: () => {},
    onCancel: () => {},
};

export { Submit };
