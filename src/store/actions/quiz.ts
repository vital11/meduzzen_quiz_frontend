import { AxiosError } from 'axios'
import { Dispatch } from 'redux'
import { quizAPI } from '../../api/quizAPI'
import { QuizAction, QuizActionTypes, IQuizCreate, IQuizUpdate, IDescriptionUpdate, IQuestionsUpdate } from '../../types/quiz'


export const addQuiz = (data: IQuizCreate) => {
    return async (dispatch: Dispatch<QuizAction>) => {
        try {
            dispatch({ type: QuizActionTypes.ADD_QUIZ })
            const quiz = await quizAPI.createQuiz(data)
            dispatch({
                type: QuizActionTypes.ADD_QUIZ_SUCCESS,
                payload: quiz })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: QuizActionTypes.ADD_QUIZ_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchQuiz = (companyId: number, quizId: number) => {
    return async (dispatch: Dispatch<QuizAction>) => {
        try {
            dispatch({ type: QuizActionTypes.FETCH_QUIZ })
            const quiz = await quizAPI.readQuiz(companyId, quizId)
            dispatch({
                type: QuizActionTypes.FETCH_QUIZ_SUCCESS,
                payload: quiz })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: QuizActionTypes.FETCH_QUIZ_ERROR, 
                payload: error.message })
        }
    }
}

export const fetchCompanyQuizzes = (companyId: number) => {
    return async (dispatch: Dispatch<QuizAction>) => {
        try {
            dispatch({ type: QuizActionTypes.FETCH_QUIZZES })
            const quizzes = await quizAPI.readCompanyQuizzes(companyId)
            dispatch({
                type: QuizActionTypes.FETCH_QUIZZES_SUCCESS,
                payload: quizzes })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: QuizActionTypes.FETCH_QUIZZES_ERROR, 
                payload: error.message })
        }
    }
}

export const updateQuizDescription = (data: IDescriptionUpdate) => {
    return async (dispatch: Dispatch<QuizAction>) => {
        try {
            dispatch({ type: QuizActionTypes.UPDATE_QUIZ })
            const quiz = await quizAPI.updateQuizDescription(data)
            dispatch({
                type: QuizActionTypes.UPDATE_QUIZ_SUCCESS,
                payload: quiz })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: QuizActionTypes.UPDATE_QUIZ_ERROR, 
                payload: error.message })
        }
    }
}

export const updateQuizQuestions = (data: IQuestionsUpdate) => {
    return async (dispatch: Dispatch<QuizAction>) => {
        try {
            dispatch({ type: QuizActionTypes.UPDATE_QUIZ })
            const quiz = await quizAPI.updateQuizQuestions(data)
            dispatch({
                type: QuizActionTypes.UPDATE_QUIZ_SUCCESS,
                payload: quiz })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: QuizActionTypes.UPDATE_QUIZ_ERROR, 
                payload: error.message })
        }
    }
}

export const removeQuiz = (companyId: number, quizId: number) => {
    return async (dispatch: Dispatch<QuizAction>) => {
        try {
            dispatch({ type: QuizActionTypes.REMOVE_QUIZ })
            const quiz = await quizAPI.deleteQuiz(companyId, quizId)
            dispatch({
                type: QuizActionTypes.REMOVE_QUIZ_SUCCESS,
                payload: quiz })
        } catch (e) {
            const error = e as AxiosError
            dispatch({
                type: QuizActionTypes.REMOVE_QUIZ_ERROR, 
                payload: error.message })
        }
    }
}

