import { api } from '.'
import { Quiz, IQuizCreate, IQuizUpdate, IDescriptionUpdate, IQuestionsUpdate } from '../types/quiz'


export const quizAPI = {

    async createQuiz(createForm: IQuizCreate): Promise<Quiz> {
        return await api.post<Quiz>('/quizzes/', createForm).then(response => response.data)
    },

    async readQuiz(companyId: number, quizId: number): Promise<Quiz> {
        return await api.get<Quiz>(`/quizzes/${companyId}/${quizId}`).then(response => response.data)
    },

    async readCompanyQuizzes(companyId: number): Promise<Quiz[]> {
        return await api.get<Quiz[]>(`/quizzes/companies/${companyId}`).then(response => response.data)
    },

    async updateQuizDescription(updateForm: IDescriptionUpdate): Promise<Quiz> {
        return await api.patch<Quiz>('/quizzes/', updateForm).then(response => response.data)
    },

    async updateQuizQuestions(updateForm: IQuestionsUpdate): Promise<Quiz> {
        return await api.patch<Quiz>('/quizzes/questions', updateForm).then(response => response.data)
    },

    async deleteQuiz(companyId: number, quizId: number): Promise<Quiz> {
        return await api.delete<Quiz>(`/quizzes/${companyId}/${quizId}`).then(response => response.data)
    },
}
