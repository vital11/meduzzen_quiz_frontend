import { Answer } from "../../types/quiz"


type Props = {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer?: Answer
    questionNumber: number
    totalQuestions: number
}

export default function QuestionCard({ question, answers, callback, userAnswer, questionNumber, totalQuestions }: Props) {

    return (
        <div className="flex flex-row">
            <div className="w-full space-y-5 p-5 rounded-2xl bg-gray-200">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer">
                    Question: { questionNumber } / { totalQuestions }
                </p>
                <p className="mx-auto text-left font-medium tracking-wide cursor-pointer">
                    { question }
                </p>
                <div className="space-y-5">
                    { answers.map(answer => (
                        <div key={answer}>
                            <button
                                className="w-full py-3 px-5 text-left text-lg text-white bg-gray-300 rounded-lg hover:bg-sky-300 active:bg-sky-400 outline-none"
                                disabled={ !!userAnswer }
                                value={ answer }
                                onClick={ callback }
                            >   { answer }
                            </button>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}
