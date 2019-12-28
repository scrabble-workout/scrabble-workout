import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Submit.scss';

const Submit = ({ onSubmit, onCancel, showCancel }) => (
    <section className={classes.Submit}>
        <button
            className={classNames(
                classes.Button,
                classes.SubmitButton,
            )}
            onClick={onSubmit}
            type="button"
        >
            Zatwierdź
        </button>
        {
            showCancel
                ? (
                    <button
                        className={classNames(
                            classes.Button,
                            classes.CancelButton,
                        )}
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
    showCancel: PropTypes.bool.isRequired,
};

Submit.defaultProps = {
    onSubmit: () => {},
    onCancel: () => {},
};

export { Submit };
