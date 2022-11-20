import { useState } from "react"
import { AxiosError } from "axios"
import { userAPI } from "../../api/userAPI"
import Input from "../UI/Input"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setUserTC } from "../../store/reducers/userReducer"
import { ErrorMessage, Loader } from "../UI/Messages"


export default function UserMeUpdate() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
	const dispatch = useAppDispatch()
    
    async function clickHandler() {
        try {
            setError('')
            setLoading(true)
            const data = await userAPI.updateUserMe({
                name: name,
                password: password
            })
            dispatch(setUserTC(data))
            setLoading(false)
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
        
            <div className="p-10 rounded-2xl bg-white">
                <p className="text-center mb-8 font-medium tracking-wide cursor-pointer mx-auto">
                    Update Name or Password
                </p>
                <form className="space-y-4">
                    <Input value={ name } setValue={ setName } type="name" placeholder="Name" />
                    <Input value={ password } setValue={ setPassword } type="password" placeholder="Password" />
                    <button
                        type="submit"
                        className="w-full py-3 text-lg text-white bg-teal-300 rounded-lg hover:bg-teal-200 active:bg-teal-400 outline-none"
                        onClick={() => clickHandler()}
                    >   Update
                    </button>
                </form>
            </div> 
        </>
    )
}


