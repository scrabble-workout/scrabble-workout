import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import classes from './Letters.scss';
import { LettersList } from './LettersList/LettersList';

const Letters = ({ dragEnd, letters, clicked }) => (
    <DragDropContext onDragEnd={dragEnd}>
        <section className={classes.Letters}>
            <Droppable droppableId="droppable-1" direction="horizontal">
                {(provided) => (
                    <LettersList
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
    dragEnd: PropTypes.func,
    letters: PropTypes.array.isRequired,
    clicked: PropTypes.func,
};

Letters.defaultProps = {
    dragEnd: () => {},
    clicked: () => {},
};

export { Letters };
