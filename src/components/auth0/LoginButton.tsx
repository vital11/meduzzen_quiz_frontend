import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()

	return (
		<button
			onClick={() => loginWithRedirect()}
			className="py-3 w-full text-lg text-black bg-slate-200 rounded-lg hover:bg-slate-100 active:bg-slate-300 outline-none"
		>	Continue with Auth0
		</button>
	);
};

export default LoginButton
