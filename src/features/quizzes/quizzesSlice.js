import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },

    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

export const addQuizThunk = quiz => {
    const { id, topicId } = quiz;
    return (dispatch) => {
        dispatch(addQuiz(quiz));
        dispatch(addQuizId({ quizId: id, topicId: topicId}));
    }
}