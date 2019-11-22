import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';

import classes from './Letter.scss';

const Letter = ({ dragDisabled, clicked, letter, index }) => (
    <Draggable
        draggableId={letter.id}
        isDragDisabled={dragDisabled}
        disableInteractiveElementBlocking
        index={index}
        key={letter.id}
    >
        {(provided) => (
            <li
                /*eslint-disable react/jsx-props-no-spreading*/
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className={classNames(
                    classes.Letter,
                    classes[`Letter-${index + 1}`],
                )}
            >
                <button
                    type="button"
                    tabIndex="-1"
                    className={classes.LetterButton}
                    disabled={!letter.active}
                    onClick={() => clicked(letter.id)}
                >
                    {letter.value}
                </button>
            </li>
        )}
    </Draggable>
);

Letter.propTypes = {
    dragDisabled: PropTypes.bool.isRequired,
    clicked: PropTypes.func,
    letter: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

Letter.defaultProps = {
    clicked: () => {},
};

export { Letter };
