import { useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Answer } from '../../types/quiz'
import { shuffleArray } from '../../utils'
import QuestionCard from './QuestionCard'


export default function QuizStart() {
    const { quiz } = useTypedSelector((state) => state.quiz)

    const totalQuestions = quiz.questions && quiz.questions.length

    const shuffledAnswers = quiz.questions && quiz.questions.map((question) => ({
        ...question,
        answers: shuffleArray([...question.answers, question.right_answer])}
    ))
    console.log(shuffledAnswers)

    const [number, setNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [userAnswers, setUserAnswers] = useState<Answer[]>([])
    const [gameOver, setGameOver] = useState(true)
    
    const startQuiz = async () => {
        setGameOver(false)
        setNumber(0)
        setScore(0)
        setUserAnswers([])
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            const correct = quiz.questions[number].right_answer === answer
            if (correct) setScore(prev => prev + 1)

            const answerObject: Answer = {
                question_name: quiz.questions[number].question_name,
                right_answer: quiz.questions[number].right_answer,
                answer,
                correct
            }
            setUserAnswers(prev => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        const nextQuestion = number + 1
        if (nextQuestion === totalQuestions) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }

    return (
        <>
            <div className="w-1/2 mx-auto my-10 p-10 space-y-5 rounded-2xl bg-gray-100">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer mb-8">
                    { quiz.quiz_name }
                </p>
                { (gameOver || userAnswers.length === totalQuestions) &&
                    <button 
                        className="w-full py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                        onClick={ startQuiz }
                    >   Start Quiz
                    </button> }
                { !gameOver && <p>Score: { score }</p> }
                { quiz.questions && !gameOver && 
                <QuestionCard
                    questionNumber={ number + 1 }
                    totalQuestions={ totalQuestions }
                    question={ quiz.questions[number].question_name }
                    answers={ shuffledAnswers[number].answers }
                    userAnswer={ userAnswers ? userAnswers[number] : undefined }
                    callback={ checkAnswer }
                /> }
                { quiz.questions && !gameOver && userAnswers.length === number + 1 && number !== totalQuestions - 1 &&
                <button 
                    type="submit" 
                    className="w-full py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                    onClick={ nextQuestion }
                >   Next Question
                </button> }
            </div>
        </>
    )
}
