import { AxiosError } from "axios"
import { useState } from "react"
import { ActionMeta } from "react-select"
import AsyncSelect from "react-select/async"

import { companyAPI } from "../../api/companyAPI"
import { ICompany, MembershipTypes } from "../../types/companies"
import { ErrorMessage, Loader } from "../UI/Messages"


interface Option { label?: string, value?: number }
interface CompanyInviteCreateProps { id: string }


export default function CompanyInviteCreate({ id }: CompanyInviteCreateProps) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [companyID, setCompanyID] = useState<number>()

    const loadOptions = (searchValue: string, callback: (options: Option[]) => void): void => {
        companyAPI.readCompaniesMeOwner().then(data => {
            let companies = data
            callback(companies.map((company: ICompany) => ({
                value: company.comp_id,
                label: company.comp_name
            })))
        })
    }

    const handleChange = (selectedOption: Option | null,  actionMeta: ActionMeta<Option>) => {
        setCompanyID(selectedOption?.value)
    }

    const sendInvite = async () => {
        try {
            setError('')
            setLoading(true)
            companyAPI.createMembership({
                user_id: Number(id),
                company_id: companyID,
                membership_type: MembershipTypes.INVITE
            })
            setLoading(false)
        } catch (e) {
            setLoading(false)
            const error = e as AxiosError
            setError(error.message)
        }
    }

    return (
        <>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }

            <div className="p-10 rounded-2xl bg-white space-y-4">
                <AsyncSelect 
                    placeholder ={"Choose Company..."}
                    loadOptions={ loadOptions } 
                    defaultOptions
                    onChange={ handleChange } 
                    isSearchable={false}    
                    isClearable
                />
                <button 
                    type="submit" 
                    className="w-full py-3 text-lg text-white bg-emerald-400 rounded-lg hover:bg-emerald-300 active:bg-emerald-500 outline-none"
                    onClick={ sendInvite }
                >   Invite
                </button>
            </div>
        </>
	)
}

