import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "../../store/actions/user";
import { useNavigate } from "react-router-dom";


const Login = () => {
	// const navigate = useNavigate();


	const [loginForm, setLoginform] = useState({
		username: "",
		password: "",
	});
    
    const onChangeForm = (label: string, event: React.ChangeEvent<HTMLInputElement>) => {
		switch (label) {
			case "username":
				setLoginform({ ...loginForm, username: event.target.value });
				break;
			case "password":
				setLoginform({ ...loginForm, password: event.target.value });
				break;
		}
	};

    const dispatch = useAppDispatch()

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

        dispatch(login(loginForm));

        // reload page
        setTimeout(() => {
			window.location.reload();
		}, 1000);


		// navigate("/users/me")

	};

    return (
		<div className="w-[600px] p-10 rounded-xl bg-white absolute top-40 left-1/2 -translate-x-1/2">
			<div>
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                    Welcome to Quiz
                </h1>
				<p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
					Login to your account
				</p>
			</div>
			<form onSubmit={onSubmitHandler}>
				<div className="space-y-4">
					<input
						type="text"
						placeholder="Email"
						className="block text-md py-3 px-5 rounded-lg w-full border outline-none ocus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
						onChange={(event) => {onChangeForm("username", event)}}
					/>
					<input
						type="password"
						placeholder="Password"
						className="block text-md py-3 px-5 rounded-lg w-full border outline-none ocus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
						onChange={(event) => {onChangeForm("password", event)}}
					/>
				</div>
				<div className="text-center mt-6">
					<button
						type="submit"
						className="w-full py-3 text-center text-lg text-white bg-amber-400 rounded-lg hover:bg-amber-300 active:bg-amber-500 outline-none"
					>	Sign In
					</button>
                    
                    <p className="w-full text-center text-md my-3 font-semibold text-gray-500">
					    or
				    </p>
					<button
						type="submit"
						className="py-3 w-full text-lg text-black bg-slate-200 rounded-lg hover:bg-slate-100 active:bg-slate-300 outline-none"
					>	Continue with Auth0
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;

