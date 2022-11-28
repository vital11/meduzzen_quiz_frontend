import { useState } from "react"
import { AxiosError } from "axios"
import { useNavigate, useParams } from "react-router-dom"

import { companyAPI } from "../../api/companyAPI"
import { ICompany } from "../../types/companies"
import Modal from "../UI/Modal"
import { ErrorMessage, Loader } from "../UI/Messages"


interface Params {
    id: string;
}  

export default function CompanyDelete() {
    const {id} = useParams<keyof Params>() as Params
    const [company, setCompany] = useState<ICompany>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    async function clickHandler() {
        try {
            setError('')
            setLoading(true)
            const data = await companyAPI.deleteCompany(id)
            setCompany(data)
            setLoading(false)
            setModal(true)
            setTimeout(() => {
                navigate('/companies')
            }, 3000)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

            { modal && 
            <Modal title="" onClose={() => setModal(false)}>
                <p> Company <span style={{ fontWeight: 'bold'}}> {company?.comp_name} </span> deleted successfully</p>
            </Modal> }

            <div className="p-10 rounded-2xl bg-white">
                <p className="text-center font-medium tracking-wide cursor-pointer mx-auto mb-8">
                    Delete Company
                </p>
                <button
                    type="submit"
                    className="w-full py-3 text-center text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                    onClick={() => clickHandler()}
                >   Delete
                </button>
            </div>
        </>
    )
}






