import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { ErrorMessage, Loader } from '../UI/Messages'
import { QuizProps } from '../../types/quiz'


export default function QuizDelete({ companyId, quizId }: QuizProps) {
    const { error: { removeQuizError }, loading: { removeQuizLoading }} = useTypedSelector((state) => state.quiz)
    const { removeQuiz } = useActions()
    const navigate = useNavigate()

    const handleDelete = () => {
        removeQuiz(companyId, quizId)
        navigate(`/companies/${companyId}`)
    }

    return (
        <>
            { removeQuizLoading && <Loader /> }
            { removeQuizError && <ErrorMessage error={ removeQuizError.message } /> }

            <div className="p-10 rounded-2xl bg-gray-200">
                <button
                    type="submit"
                    className="w-full py-3 text-center text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                    onClick={ handleDelete }
                >   Delete Quiz
                </button>
            </div>
        </>
    )
}
