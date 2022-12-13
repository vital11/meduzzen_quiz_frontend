import { useNavigate } from "react-router-dom"
import { CompanyProps } from "../../types/company"
import { ErrorMessage, Loader } from "../UI/Messages"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"



export default function CompanyDelete({ id }: CompanyProps) {
    const { error: { removeCompanyError }, loading: { removeCompanyLoading } } = useTypedSelector((state) => state.company)
    const { removeCompany } = useActions()
    const navigate = useNavigate()

    const handleClick = () => {
        removeCompany(id)
        navigate('/dashboard')
    }

    return (
        <>
            { removeCompanyLoading && <Loader /> }
            { removeCompanyError && <ErrorMessage error={ removeCompanyError.message } /> }

            <div className="p-10 rounded-2xl bg-white">
                <p className="text-center font-medium tracking-wide cursor-pointer mx-auto mb-8">
                    Delete Company
                </p>
                <button
                    type="submit"
                    className="w-full py-3 text-center text-lg text-white bg-red-300 rounded-lg hover:bg-red-200 active:bg-red-400 outline-none"
                    onClick={ handleClick }
                >   Delete
                </button>
            </div>
        </>
    )
}
