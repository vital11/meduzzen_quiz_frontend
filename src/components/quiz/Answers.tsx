import { Control, FieldErrors, useFieldArray, UseFormRegister } from 'react-hook-form'
import { IQuizCreate, IQuizUpdate } from '../../types/quiz'


type AnswersProps = {
	answerIndex: number
    control: Control
    register: UseFormRegister<IQuizCreate | IQuizUpdate>
	errors: FieldErrors
}

export default function Answers({ answerIndex, control, register, errors }: AnswersProps) {
	const { fields, remove, append } = useFieldArray({
		name: `questions.${answerIndex}.answers`,
		control,
		rules: {
            minLength: 2,
            required: 'Please append at least 2 answers'
        }
	})

	return (
		<div className="ml-20 space-y-4">
			<label className="block"> Answers: </label>
			{ fields.map((item, k) => {
				return (
					<div key={ item.id } className="flex gap-4">
						<input
							className="grow text-md py-3 px-5 rounded-lg w-auto border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
							{...register(`questions.${answerIndex}.answers.${k}`, {
								required: true,
								minLength: 1,
							})}
							name={`questions.${answerIndex}.answers.${k}`}
						/>
						<button 
							type="button" 
							className="flex-none px-5 py-3 text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
							onClick={() => remove(k)}
						>   Delete
						</button>
					</div>
				)
			})}
			<button
				type="button"
				className="flex-none px-5 py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
				onClick={() => append('New answer')}
			>	Append Answer
			</button>
		</div>
	)
}
