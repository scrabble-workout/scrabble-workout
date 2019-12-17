import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';

import classes from './Letters.scss';
import { Letter } from './Letter/Letter';

const Letters = ({ letters, clicked, dragDisabled, dragEnd }) => (
    <DragDropContext onDragEnd={dragEnd}>
        <section className={classes.Letters}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                    <ul
                        className={classNames(
                            classes.LettersContainer,
                            { [classes.DraggingOver]: snapshot.isDraggingOver },
                        )}
                        ref={provided.innerRef}
                        /*eslint-disable react/jsx-props-no-spreading*/
                        {...provided.droppableProps}
                    >
                        {
                            letters.map((letter, i) => (
                                <Letter
                                    /*eslint-disable react/jsx-props-no-spreading*/
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    dragDisabled={dragDisabled}
                                    clicked={clicked}
                                    letter={letter}
                                    index={i}
                                    key={letter.id}
                                />
                            ))
                        }
                        {provided.placeholder}
                    </ul>
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
