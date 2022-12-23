
type QuestionBase = {
    question_name: string
    answers: string[]
    right_answer: string
}

type Question = QuestionBase & {
    quiz_id: number 
}

export type Answer = {
    question_name: string
    right_answer: string
    answer: string
    correct: boolean
}

type QuizBase = {
    company_id: number
    quiz_name?: string
    quiz_description?: string
    frequency?: number
}

export interface IQuizCreate extends QuizBase {
    quiz_name: string
    questions: QuestionBase[]
}

export interface IQuizUpdate extends QuizBase {
    quiz_id: number
    questions?: QuestionBase[]
}

export interface QuizDescription extends QuizBase {
    quiz_name?: string
    quiz_description?: string
    quiz_id: number
}

export interface Quiz extends IQuizCreate {
    quiz_id: number
}

export type QuizProps = {
    companyId: number
    quizId: number
}

export type QuizListProps = {
    title: string
    companyId: number
}

interface QuizErrorMessage {
    message: string
    detail?: string
}

export interface QuizError {
    addQuizError?: QuizErrorMessage
    fetchQuizzesError?: QuizErrorMessage
    fetchQuizError?: QuizErrorMessage
    updateQuizError?: QuizErrorMessage
    updateQuizQuestionsError?: QuizErrorMessage
    removeQuizError?: QuizErrorMessage
}

export interface QuizLoading {
    addQuizLoading?: boolean
    fetchQuizzesLoading?: boolean
    fetchQuizLoading?: boolean
    updateQuizLoading?: boolean
    updateQuizQuestionsLoading?: boolean
    removeQuizLoading?: boolean
}

export interface QuizState {
    quizzes: Quiz[]
    quiz: Quiz
    loading: QuizLoading
    error: QuizError
}

export enum QuizActionTypes {

    ADD_QUIZ = 'ADD_QUIZ',
    ADD_QUIZ_SUCCESS = 'ADD_QUIZ_SUCCESS',
    ADD_QUIZ_ERROR = 'ADD_QUIZ_ERROR',

    FETCH_QUIZZES = 'FETCH_QUIZZES',
    FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS',
    FETCH_QUIZZES_ERROR = 'FETCH_QUIZZES_ERROR',

    FETCH_QUIZ = 'FETCH_QUIZ',
    FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS',
    FETCH_QUIZ_ERROR = 'FETCH_QUIZ_ERROR',

    UPDATE_QUIZ = 'UPDATE_QUIZ',
    UPDATE_QUIZ_SUCCESS = 'UPDATE_QUIZ_SUCCESS',
    UPDATE_QUIZ_ERROR = 'UPDATE_QUIZ_ERROR',

    UPDATE_QUIZ_QUESTIONS = 'UPDATE_QUIZ_QUESTIONS',
    UPDATE_QUIZ_QUESTIONS_SUCCESS = 'UPDATE_QUIZ_QUESTIONS_SUCCESS',
    UPDATE_QUIZ_QUESTIONS_ERROR = 'UPDATE_QUIZ_QUESTIONS_ERROR',

    REMOVE_QUIZ = 'REMOVE_QUIZ',
    REMOVE_QUIZ_SUCCESS = 'REMOVE_QUIZ_SUCCESS',
    REMOVE_QUIZ_ERROR = 'REMOVE_QUIZ_ERROR',
}

interface AddQuizAction {
    type: QuizActionTypes.ADD_QUIZ
}

interface AddQuizSuccessAction {
    type: QuizActionTypes.ADD_QUIZ_SUCCESS
    payload: Quiz
}

interface AddQuizErrorAction {
    type: QuizActionTypes.ADD_QUIZ_ERROR
    payload: string
}

interface FetchQuizzesAction {
    type: QuizActionTypes.FETCH_QUIZZES
}

interface FetchQuizzesSuccessAction {
    type: QuizActionTypes.FETCH_QUIZZES_SUCCESS
    payload: Quiz[]
}

interface FetchQuizzesErrorAction {
    type: QuizActionTypes.FETCH_QUIZZES_ERROR
    payload: string
}

interface FetchQuizAction {
    type: QuizActionTypes.FETCH_QUIZ
}

interface FetchQuizSuccessAction {
    type: QuizActionTypes.FETCH_QUIZ_SUCCESS
    payload: Quiz
}

interface FetchQuizErrorAction {
    type: QuizActionTypes.FETCH_QUIZ_ERROR
    payload: string
}

interface UpdateQuizAction {
    type: QuizActionTypes.UPDATE_QUIZ
}

interface UpdateQuizSuccessAction {
    type: QuizActionTypes.UPDATE_QUIZ_SUCCESS
    payload: Quiz
}

interface UpdateQuizErrorAction {
    type: QuizActionTypes.UPDATE_QUIZ_ERROR
    payload: string
}

interface UpdateQuizQuestionsAction {
    type: QuizActionTypes.UPDATE_QUIZ_QUESTIONS
}

interface UpdateQuizQuestionsSuccessAction {
    type: QuizActionTypes.UPDATE_QUIZ_QUESTIONS_SUCCESS
    payload: Question[]
}

interface UpdateQuizQuestionsErrorAction {
    type: QuizActionTypes.UPDATE_QUIZ_QUESTIONS_ERROR
    payload: string
}

interface RemoveQuizAction {
    type: QuizActionTypes.REMOVE_QUIZ
}

interface RemoveQuizSuccessAction {
    type: QuizActionTypes.REMOVE_QUIZ_SUCCESS
    payload: Quiz
}

interface RemoveQuizErrorAction {
    type: QuizActionTypes.REMOVE_QUIZ_ERROR
    payload: string
}

export type QuizAction = 

    | AddQuizAction
    | AddQuizSuccessAction
    | AddQuizErrorAction

    | FetchQuizzesAction
    | FetchQuizzesSuccessAction
    | FetchQuizzesErrorAction

    | FetchQuizAction
    | FetchQuizSuccessAction
    | FetchQuizErrorAction

    | UpdateQuizAction
    | UpdateQuizSuccessAction
    | UpdateQuizErrorAction

    | UpdateQuizQuestionsAction
    | UpdateQuizQuestionsSuccessAction
    | UpdateQuizQuestionsErrorAction

    | RemoveQuizAction
    | RemoveQuizSuccessAction
    | RemoveQuizErrorAction
