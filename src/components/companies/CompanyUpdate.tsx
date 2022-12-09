import { useForm } from 'react-hook-form'

import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ICompanyUpdate, CompanyProps } from "../../types/company"
import { ErrorMessage, Loader } from "../UI/Messages"


export default function CompanyUpdate({ id }: CompanyProps) {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ICompanyUpdate>({ mode: 'onChange' })
    const { error: { updateCompanyError }, loading: { updateCompanyLoading } } = useTypedSelector((state) => state.company)
    const { updateCompany } = useActions()


    const onSubmit = handleSubmit(( data ) => {
        updateCompany(id, data)
    })

    return (
        <>
            { updateCompanyLoading && <Loader /> }
            { updateCompanyError && <ErrorMessage error={ updateCompanyError.message } /> }

            <div className="p-10 rounded-2xl bg-white">
                <p className="mx-auto text-center font-medium tracking-wide cursor-pointer mb-8">
                    Update Company
                </p>
                <form className="space-y-4" onSubmit={ onSubmit }>
                    <>
                        <input
                            type="text"
                            placeholder="Name"
                            className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                            {...register("comp_name")}
                        />
                        { errors.comp_name && <p className="mt-2 text-red-300"> Enter valid email address </p> }
                    </>
                    <>
                        <input
                            type="text"
                            placeholder="Description"
                            className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                            {...register("comp_description")}
                        />
                        { errors.comp_description && <p className="mt-2 text-red-300"> Password should contain at least one character </p> }
                    </>
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                            {...register("is_private")}
                        />
                        <label
                            className="py-3 px-5 w-full"
                        >   Is Private
                        </label>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 text-lg text-white bg-teal-300 rounded-lg hover:bg-teal-200 active:bg-teal-400 outline-none"
                        disabled={!isValid}
                    >   Update
                    </button>
                </form>
            </div>
        </>
	)
}
