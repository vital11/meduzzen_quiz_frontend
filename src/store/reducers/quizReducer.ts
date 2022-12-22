import { Quiz, QuizAction, QuizActionTypes, QuizState } from "../../types/quiz"


const initialState: QuizState = {
    quizzes: [],
    quiz: {} as Quiz,
    loading: {},
    error: {},
}

export const quizReducer = (state = initialState, action: QuizAction): QuizState => {
    switch (action.type) {

        case QuizActionTypes.ADD_QUIZ:
            return {...state,
                error: { addQuizError: undefined },
                loading: { addQuizLoading: true }}  
        case QuizActionTypes.ADD_QUIZ_SUCCESS:
            return {...state,
                quizzes: [...state.quizzes, action.payload],
                loading: { addQuizLoading: false }}
        case QuizActionTypes.ADD_QUIZ_ERROR:
            return {...state,
                error: { addQuizError: { message: action.payload }},
                loading: { addQuizLoading: false }}

        case QuizActionTypes.FETCH_QUIZZES:
            return {...state,
                loading: { fetchQuizzesLoading: true },
                error: { fetchQuizzesError: undefined },
                quizzes: [] }  
        case QuizActionTypes.FETCH_QUIZZES_SUCCESS:
            return {...state,
                loading: { fetchQuizzesLoading: false },
                quizzes: [...state.quizzes, ...action.payload ]}
        case QuizActionTypes.FETCH_QUIZZES_ERROR:
            return {...state,
                loading: { fetchQuizzesLoading: false },
                error: { fetchQuizzesError: { message: action.payload }}}

        case QuizActionTypes.FETCH_QUIZ:
            return {...state,
                loading: { fetchQuizLoading: true },
                error: { fetchQuizError: undefined }}  
        case QuizActionTypes.FETCH_QUIZ_SUCCESS:
            return {...state,
                quiz: action.payload,
                loading: { fetchQuizLoading: false }}
        case QuizActionTypes.FETCH_QUIZ_ERROR:
            return {...state,
                error: { fetchQuizError: { message: action.payload }},
                loading: { fetchQuizLoading: false }}

        case QuizActionTypes.UPDATE_QUIZ:
            return {...state,
                loading: { updateQuizLoading: true },
                error: { updateQuizError: undefined }}  
        case QuizActionTypes.UPDATE_QUIZ_SUCCESS:
            return {...state,
                quiz: action.payload,
                loading: { updateQuizLoading: false }}
        case QuizActionTypes.UPDATE_QUIZ_ERROR:
            return {...state,
                error: { updateQuizError: { message: action.payload }},
                loading: { updateQuizLoading: false }}
        
        case QuizActionTypes.REMOVE_QUIZ:
            return {...state,
                loading: { removeQuizLoading: true },
                error: { removeQuizError: undefined }}  
        case QuizActionTypes.REMOVE_QUIZ_SUCCESS:
            return {...state,
                quizzes: state.quizzes.filter(quiz => quiz.quiz_id !== action.payload.quiz_id),
                loading: { removeQuizLoading: false }}
        case QuizActionTypes.REMOVE_QUIZ_ERROR:
            return {...state,
                error: { removeQuizError: { message: action.payload }},
                loading: { removeQuizLoading: false }}

        default:
            return state
    }
}
