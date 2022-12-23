import { useState } from "react"
import { useForm } from 'react-hook-form'
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { IQuizCreate } from "../../types/quiz"
import { ErrorMessage, Loader } from "../UI/Messages"
import QuizModal from "../UI/QuizModal"
import Questions from "./Questions"


const defaultValues = {
    quiz_name: 'Quiz',
    quiz_description: undefined,
    questions: [
        {
            question_name: 'Question 1',
            answers: ['Answer 1', 'Answer 2'],
            right_answer: 'Right Answer'
        },
        {
            question_name: "Question 2",
            answers: ['Answer 1', 'Answer 2'],
            right_answer: 'Right Answer'
        }
    ],
}

type QuizCreateProps = { companyId: number }

export default function QuizCreate({ companyId }: QuizCreateProps) {
    const { control, register, handleSubmit, getValues, reset, setValue, formState: { errors, isValid }} = useForm<IQuizCreate>({
        defaultValues
    })

    const { error: { addQuizError }, loading: { addQuizLoading }} = useTypedSelector((state) => state.quiz)
    const { addQuiz } = useActions()
    const [modal, setModal] = useState(false)

    const onSubmit = handleSubmit(( data ) => {
        addQuiz({...data, company_id: companyId })
        setModal(false)
    })

    return (
        <>
            { addQuizLoading && <Loader /> }
            { addQuizError && <ErrorMessage error={ addQuizError.message } /> }

            { modal && <QuizModal title="" onClose={() => setModal(false)}>
                <div className="p-10 rounded-2xl bg-white">
                    <p className="mx-auto text-center font-medium tracking-wide cursor-pointer mb-8">
                        Create Quiz
                    </p>
                    <form className="space-y-4" onSubmit={ onSubmit }>
                        <>
                            <input
                                type="text"
                                placeholder="Quiz name"
                                className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                                {...register("quiz_name", {
                                    required: true,
                                    minLength: 1,
                                })}
                            />
                            { errors.quiz_name && <p className="mt-2 text-red-300"> Enter valid Quiz name </p> }
                        </>
                        <>
                            <input
                                type="text"
                                placeholder="Quiz description"
                                className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                                {...register("quiz_description", {
                                    minLength: 1,
                                })}
                            />
                            { errors.quiz_description && <p className="mt-2 text-red-300"> Enter valid Quiz description </p> }
                        </>

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
                        >   Create
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
                >   Create Quiz
                </button>
            </div>
        </>
	)
}
