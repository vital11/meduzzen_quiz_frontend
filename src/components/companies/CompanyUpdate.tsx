import { AxiosError } from "axios"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { useParams } from "react-router-dom"

import { companyAPI } from "../../api/companyAPI"
import { ICompanyUpdate } from "../../types/companies"
import { ErrorMessage, Loader } from "../UI/Messages"


interface Params {
    id: string;
}   

export default function CompanyUpdate() {
    const {id} = useParams<keyof Params>() as Params
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ICompanyUpdate>({ mode: 'onChange' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const onSubmit = handleSubmit(( data ) => {
        (async () => {
            try {
                setError('')
                setLoading(true)
                companyAPI.updateCompany(id, {
                    name: data.name,
                    description: data.description,
                    is_private: data.is_private,
                })
                setLoading(false)
                window.location.reload()
            } catch (e: unknown) {
                const error = e as AxiosError
                setLoading(false)
                setError(error.message)
            }
        })()
    })

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

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
                            {...register("name")}
                        />
                        { errors.name && <p className="mt-2 text-red-300"> Enter valid email address </p> }
                    </>
                    <>
                        <input
                            type="text"
                            placeholder="Description"
                            className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
                            {...register("description")}
                        />
                        { errors.description && <p className="mt-2 text-red-300"> Password should contain at least one character </p> }
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



