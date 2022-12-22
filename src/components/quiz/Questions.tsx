import { Control, FieldErrors, useFieldArray, UseFormRegister, UseFormSetValue, UseFormGetValues } from 'react-hook-form'
import { IQuizCreate, IQuizUpdate } from '../../types/quiz'
import Answers from './Answers'


type QuestionsProps = {
    control: Control | any
	errors: FieldErrors | any
    register: UseFormRegister<IQuizCreate | IQuizUpdate> | any
    setValue: UseFormSetValue<any>
    getValues: UseFormGetValues<IQuizCreate | IQuizUpdate> | any
}

export default function Questions({ control, register, setValue, getValues, errors }: QuestionsProps) {
    const { fields, remove } = useFieldArray({
        name: 'questions',
        control,
        rules: {
            minLength: 2,
            required: 'Please append at least 2 questions'
        }
    })

    return (
        <>
            <ul className="ml-20 space-y-4 bg-gray-100 p-5 rounded-2xl">
                { fields.map((item, index) => {
                    return (
                        <li key={item.id} className="space-y-4">
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Question"
                                    className="grow text-md py-3 px-5 rounded-lg w-auto border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                                    {...register(`questions.${index}.question_name`, {
                                        required: true,
                                        minLength: 1,
                                    })}
                                />
                                <button 
                                    type="button" 
                                    className="flex-none px-5 py-3 text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                                    onClick={() => remove(index)}
                                >   Delete
                                </button>
                            </div>

                            <Answers answerIndex={index} {...{ control, register, errors }} />

                            <input
                                type="text"
                                placeholder="Right Answer"
                                className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                                {...register(`questions.${index}.right_answer`, {
                                    required: true,
                                    minLength: 1,
                                })}
                            />
                            <div className='block w-full h-4 bg-gray-200 rounded-full'></div>
                        </li>
                    )
                })}
            </ul>
            <section>
                <button 
                    type="button" 
                    className="ml-20 px-5 py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                    onClick={() => {
                        setValue('questions', [
                            ...getValues().questions,
                            {
                                name: 'append',
                                question_name: 'New question',
                                answers: ['Answer 1', 'Answer 2'],
                            }
                        ]);
                      }}
                >   Append Question
                </button>
                <p className="ml-20 mt-2 text-red-300">{ errors.questions?.root?.message }</p>
            </section>
        </>
	)
}
