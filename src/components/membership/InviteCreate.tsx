import AsyncSelect from "react-select/async"
import { ActionMeta } from "react-select"
import { useState } from "react"
import { companyAPI } from "../../api/companyAPI"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ICompany } from "../../types/company"
import { MembershipTypes } from "../../types/membership"
import { ErrorMessage, Loader } from "../UI/Messages"


interface Option { label?: string, value?: number }
interface InviteCreateProps { id: string }


export default function InviteCreate({ id }: InviteCreateProps) {
    const { error: { addInviteError }, loading: { addInviteLoading }} = useTypedSelector((state) => state.membership)
    const { addInvite } = useActions()
    const [companyID, setCompanyID] = useState<number>()

    const loadOptions = (searchValue: string, callback: (options: Option[]) => void): void => {
        companyAPI.readOwnerCompanies().then(data => {
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

    const handleClick = () => {
        addInvite({
            user_id: Number(id),
            company_id: companyID,
            membership_type: MembershipTypes.INVITE
        })
    }

    return (
        <>
            { addInviteLoading && <Loader /> }
            { addInviteError && <ErrorMessage error={ addInviteError.message} /> }

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
                    onClick={ handleClick }
                >   Invite
                </button>
            </div>
        </>
	)
}

