import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import classes from './LettersList.scss';
import { Letter } from '../Letter/Letter';

const LettersList = ({ dragDisabled, provided, innerRef, letters, clicked }) => (
    <ul className={classes.LettersContainer} ref={innerRef}>
        {
            letters.map((letter, i) => (
                <Draggable
                    draggableId={letter.id}
                    isDragDisabled={dragDisabled}
                    disableInteractiveElementBlocking
                    index={i}
                    key={letter.id}
                >
                    {/*eslint-disable no-shadow*/}
                    {(provided) => (
                        <Letter
                            provided={provided}
                            innerRef={provided.innerRef}
                            /*eslint-disable react/jsx-props-no-spreading*/
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            clicked={clicked}
                            letter={letter}
                            index={i}
                        />
                    )}
                </Draggable>
            ))
        }
        {provided.placeholder}
    </ul>
);

LettersList.propTypes = {
    dragDisabled: PropTypes.bool.isRequired,
    provided: PropTypes.object.isRequired,
    innerRef: PropTypes.func.isRequired,
    letters: PropTypes.array.isRequired,
    clicked: PropTypes.func,
};

LettersList.defaultProps = {
    clicked: () => {},
};

export { LettersList };