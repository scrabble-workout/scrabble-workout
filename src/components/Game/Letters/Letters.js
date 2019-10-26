import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import classes from './Letters.scss';
import { LettersList } from './LettersList/LettersList';

const Letters = ({ letters, clicked, dragDisabled, dragEnd }) => (
    <DragDropContext onDragEnd={dragEnd}>
        <section className={classes.Letters}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                    <LettersList
                        dragDisabled={dragDisabled}
                        provided={provided}
                        innerRef={provided.innerRef}
                        /*eslint-disable react/jsx-props-no-spreading*/
                        {...provided.droppableProps}
                        letters={letters}
                        clicked={clicked}
                    />
                )}
            </Droppable>
        </section>
    </DragDropContext>
);

Letters.propTypes = {
    letters: PropTypes.array.isRequired,
    clicked: PropTypes.func,
    dragDisabled: PropTypes.bool.isRequired,
    dragEnd: PropTypes.func,
};

Letters.defaultProps = {
    dragEnd: () => {},
    clicked: () => {},
};

export { Letters };
