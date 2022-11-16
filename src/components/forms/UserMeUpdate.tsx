import { useState } from "react"
import { AxiosError } from "axios"
import { userAPI } from "../../api/userAPI"
import Input from "../UI/Input"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setUser } from "../../store/reducers/userReducer"


export default function UserMeUpdate() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
	const dispatch = useAppDispatch()
    
    async function clickHandler() {
        try {
            const data = await userAPI.updateUserMe(name, password)
            dispatch(setUser(data))
        } catch (e) {
            const error = e as AxiosError
            console.log(error)
        }
    }

    return (
        <div className="w-[600px] m-5 p-10 rounded-xl bg-white">
            <p className="w-80 text-center mb-8 font-medium tracking-wide cursor-pointer mx-auto">
                Change Your Name or Password
            </p>
            <form className="space-y-4">
                <Input value={name} setValue={setName} type="name" placeholder="Name"  />
                <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
                <button
                    type="submit"
                    className="w-full py-3 text-lg text-white bg-green-500 rounded-lg hover:bg-green-400 active:bg-green-600 outline-none"
                    onClick={() => clickHandler()}
                >   Update
                </button>
            </form>
        </div> 
    )
}


