import { useParams } from 'react-router-dom'
import Quiz from './quiz/Quiz'
import QuizDelete from './quiz/QuizDelete'
import DescriptionUpdate from './quiz/DescriptionUpdate'
import PageTitle from './UI/PageTitle'
import QuizUpdate from './quiz/QuizUpdate'
import QuizStart from './quiz/QuizStart'


interface Params { id: string, qid: string }  

export default function QuizDetail() {
    const { id, qid } = useParams<keyof Params>() as Params
    const companyId = Number(id)
    const quizId = Number(qid)

    return (
        <>
            <PageTitle title="Quiz Detail"/>
            <div className="flex flex-row bg-white">
                <div className="basis-1/4 max-w-[25%] gap-14 space-y-5 p-5 bg-gray-200">
                    <Quiz companyId={ companyId } quizId={ quizId } />
                    <DescriptionUpdate companyId={ companyId } quizId={ quizId } />
                    <QuizUpdate companyId={ companyId } quizId={ quizId } />
                    <QuizDelete companyId={ companyId } quizId={ quizId } />
                </div>

                <div className="basis-3/4 bg-white">
                    <QuizStart />
                </div>
            </div>
        </>
    )
}
