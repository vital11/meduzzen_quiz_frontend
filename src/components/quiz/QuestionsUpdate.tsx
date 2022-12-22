import { useState } from "react"
import { useForm } from 'react-hook-form'

import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { IQuestionsUpdate, QuizProps } from "../../types/quiz"
import { ErrorMessage, Loader } from "../UI/Messages"
import QuizModal from "../UI/QuizModal"
import Questions from "./Questions"


export default function QuestionsUpdate({ companyId, quizId }: QuizProps) {
    const { quiz, error: { updateQuizError }, loading: { updateQuizLoading } } = useTypedSelector((state) => state.quiz)

    const defaultValues = {
        questions: quiz.questions && [...quiz.questions]
    }

    const { control, register, handleSubmit, getValues, reset, setValue, formState: { errors, isValid } } = useForm<IQuestionsUpdate>({
        defaultValues
    })

    const { updateQuizQuestions } = useActions()
    const [modal, setModal] = useState(false)

    const onSubmit = handleSubmit(( data ) => {
        updateQuizQuestions({ ...data, company_id: companyId, quiz_id: quizId })
        setModal(false)
    })

    return (
        <>
            { updateQuizLoading && <Loader /> }
            { updateQuizError && <ErrorMessage error={ updateQuizError.message } /> }

            { modal && <QuizModal title="" onClose={() => setModal(false)}>
                <div className="p-10 rounded-2xl bg-white">
                    <p className="mx-auto text-center font-medium tracking-wide cursor-pointer mb-8">
                        Update Quiz Questions
                    </p>
                    <form className="space-y-4" onSubmit={ onSubmit }>

                        <Questions {...{ control, register, defaultValues, getValues, setValue, errors }} />

                        <button 
                            type="submit" 
                            className="ml-20 px-5 py-3 text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                            onClick={() => reset( defaultValues )}
                        >   Reset
                        </button>
                        <button 
                            type="submit" 
                            className="w-full py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                            disabled={ !isValid }
                        >   Update
                        </button>
                        <p className="ml-20 mt-2 text-sky-300">{ errors.questions?.root?.message }</p>
                    </form>
                </div>
            </QuizModal> }

            <div className="p-10 rounded-2xl bg-gray-200">
                <button 
                    type="submit" 
                    className="w-full py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                    onClick={() => setModal(true)}
                >   Update Questions
                </button>
            </div>
        </>
	)
}
