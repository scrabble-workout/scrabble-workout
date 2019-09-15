import { SUBMIT_ANSWER } from '../actions/submit-answer';

const initialState = {
    submittedAnswer: '',
};

const submitAnswerReducer = (state = initialState, { type, answer }) => {
    switch (type) {
        case SUBMIT_ANSWER:
            return {
                ...state,
                submittedAnswer: answer,
            };
        default: return state;
    }
};

export { submitAnswerReducer };
