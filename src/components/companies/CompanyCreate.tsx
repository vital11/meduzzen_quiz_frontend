import { AxiosError } from "axios"
import { useState } from "react"
import { useForm } from 'react-hook-form'

import { companyAPI } from "../../api/companyAPI"
import { ICompanyCreate } from "../../types/companies"
import { ErrorMessage, Loader } from "../UI/Messages"
import Modal from "../UI/Modal"


export default function CompanyCreate() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ICompanyCreate>({ mode: 'onChange' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [modal, setModal] = useState(false)

    const onSubmit = handleSubmit(( data ) => {
        (async () => {
            try {
                setError('')
                setLoading(true)
                companyAPI.createCompany({
                    comp_name: data.comp_name,
                    comp_description: data.comp_description,
                    is_private: data.is_private 
                })
                setLoading(false)
                setModal(false)
            } catch (e: unknown) {
                setLoading(false)
                const error = e as AxiosError
                setError(error.message)
            }
        })()
    })

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

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
                            { errors.comp_name && <p className="mt-2 text-red-300"> Enter valid email address </p> }
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



