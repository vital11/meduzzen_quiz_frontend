import { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { ErrorMessage, Loader } from '../UI/Messages'
import { QuizProps } from '../../types/quiz'


export default function Quiz({ companyId, quizId }: QuizProps) {
    const { quiz, error: { fetchQuizError }, loading: { fetchQuizLoading } } = useTypedSelector((state) => state.quiz)
    const { fetchQuiz } = useActions()

    useEffect(() => {
        fetchQuiz(companyId, quizId)
    }, [])

    return (
        <>
            { fetchQuizLoading && <Loader /> }
            { fetchQuizError && <ErrorMessage error={ fetchQuizError.message } /> }

            <div className="p-10 rounded-2xl bg-grey-200 space-y-8">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer">
                    Quiz Info
                </p>
                <div className="flex justify-between">
                    <span> Name </span> 
                    <span>{ quiz.quiz_name }</span>
                </div>  
                <div className="flex justify-between">
                    <span> Description </span>
                    <span>{ quiz.quiz_description }</span>
                </div>
                <div className="flex justify-between">
                    <span> Frequency </span>
                    <span>{ quiz.frequency }</span>
                </div>
                <div className="flex justify-between">
                    <span> Company ID </span>
                    <span>{ quiz.company_id }</span>
                </div>
                <div className="flex justify-between">
                    <span> Quiz ID </span>
                    <span>{ quiz.quiz_id }</span>
                </div>
            </div>
        </>
	)
}
