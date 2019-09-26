import { SUBMIT_ANSWER } from '../actions/answer';

const initialState = null;

const answerReducer = (state = initialState, { type, answer }) => {
    switch (type) {
        case SUBMIT_ANSWER:
            return answer;
        default: return state;
    }
};

export { answerReducer };
