import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Quiz, QuizListProps } from '../../types/quiz'
import { ErrorMessage, Loader } from '../UI/Messages'


export default function QuizList({ title, companyId }: QuizListProps) {
    const { quizzes, error: { fetchQuizzesError }, loading: { fetchQuizzesLoading }} = useTypedSelector((state) => state.quiz)
    const { fetchCompanyQuizzes } = useActions()

    useEffect(() => {
        fetchCompanyQuizzes(companyId)
    }, [])

	const companyQuizzes = quizzes.map((quiz: Quiz) => (
        <div 
            key={quiz.quiz_id} 
            className="grid grid-cols-6 gap-4 p-2 bg-white hover:bg-gray-50"
        >   
            <span className="p-4">{ quiz.quiz_id }</span>
            <span className="p-4">{ quiz.company_id }</span>
            <span className="p-4 text-amber-400">   
                <Link to={`/companies/${companyId}/quizzes/${quiz.quiz_id}`}>{ quiz.quiz_name }</Link>
            </span>
            <span className="p-4 col-span-3 flex justify-end"></span>
        </div>
    ))

    return (
        <>
            { fetchQuizzesLoading && <Loader /> }
            { fetchQuizzesError && <ErrorMessage error={ fetchQuizzesError.message} /> }

            <div className="flex items-center w-full h-16 px-5 pb-2 font-medium tracking-wide bg-gray-100">{ title }</div>
            <div className="w-full relative">
                <>
                    <div className="grid grid-cols-6 gap-4 p-2 font-medium bg-gray-200">
                        <span className="p-4">ID</span>
                        <span className="p-4">Company ID</span>
                        <span className="p-4">Quiz Name</span>
                        <span className="p-4 col-span-3 flex justify-end"></span>
                    </div>
                    { companyQuizzes }
                </>
            </div>
        </>
    )
}

