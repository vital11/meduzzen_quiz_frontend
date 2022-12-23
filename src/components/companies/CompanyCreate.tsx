import { useState } from "react"
import { useForm } from 'react-hook-form'

import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ICompanyCreate } from "../../types/company"
import { ErrorMessage, Loader } from "../UI/Messages"
import Modal from "../UI/Modal"


export default function CompanyCreate() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ICompanyCreate>({ mode: 'onChange' })
    const { error: { addCompanyError }, loading: { addCompanyLoading } } = useTypedSelector((state) => state.company)
    const { addCompany } = useActions()
    const [modal, setModal] = useState(false)

    const onSubmit = handleSubmit(( data ) => {
        addCompany(data)
        setModal(false)
    })

    return (
        <>
            { addCompanyLoading && <Loader /> }
            { addCompanyError && <ErrorMessage error={ addCompanyError.message } /> }

            { modal && <Modal title="" onClose={() => setModal(false)}>
                <div className="p-10 rounded-2xl bg-white">
                    <p className="mx-auto text-center font-medium tracking-wide cursor-pointer mb-8">
                        Create Company
                    </p>
                    <form className="space-y-4" onSubmit={ onSubmit }>
                        <>
                            <input
                                type="text"
                                placeholder="Name"
                                className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                                {...register("comp_name", {
                                    required: true,
                                    minLength: 1,
                                })}
                            />
                            { errors.comp_name && <p className="mt-2 text-red-300"> Enter valid Company name </p> }
                        </>
                        <>
                            <input
                                type="text"
                                placeholder="Description"
                                className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                                {...register("comp_description", {
                                    required: true,
                                    minLength: 1,
                                })}
                            />
                            { errors.comp_description && <p className="mt-2 text-red-300"> Enter valid Company description </p> }
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
                            className="w-full py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                            disabled={!isValid}
                        >   Create
                        </button>
                    </form>
                </div>
            </Modal> }

            <div className="p-10 rounded-2xl bg-gray-200">
                <button 
                    type="submit" 
                    className="w-full py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                    onClick={() => setModal(true)}
                >   Create Company
                </button>
            </div>
        </>
	)
}
