import { useForm } from 'react-hook-form'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IDescriptionUpdate, QuizProps } from '../../types/quiz'
import { ErrorMessage, Loader } from '../UI/Messages'


export default function DescriptionUpdate({ companyId, quizId }: QuizProps) {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<IDescriptionUpdate>({ mode: 'onChange' })
    const { error: { updateQuizError }, loading: { updateQuizLoading } } = useTypedSelector((state) => state.quiz)
    const { updateQuizDescription } = useActions()


    const onSubmit = handleSubmit(( data ) => {
        updateQuizDescription({...data, company_id: companyId, quiz_id: quizId})
    })

    return (
        <>
            { updateQuizLoading && <Loader /> }
            { updateQuizError && <ErrorMessage error={ updateQuizError.message } /> }

            <div className="p-10 rounded-2xl bg-white">
                <form className="space-y-4" onSubmit={ onSubmit }>
                    <>
                        <input
                            type="text"
                            placeholder="Name"
                            className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                            {...register("quiz_name")}
                        />
                        { errors.quiz_name && <p className="mt-2 text-red-300"> Enter valid quiz name </p> }
                    </>
                    <>
                        <input
                            type="text"
                            placeholder="Description"
                            className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                            {...register("quiz_description")}
                        />
                        { errors.quiz_description && <p className="mt-2 text-red-300"> Enter valid quiz description </p> }
                    </>
                    <button 
                        type="submit" 
                        className="w-full py-3 text-lg text-white bg-teal-300 rounded-lg hover:bg-teal-200 active:bg-teal-400 outline-none"
                        disabled={!isValid}
                    >   Update Description
                    </button>
                </form>
            </div>
        </>
	)
}
