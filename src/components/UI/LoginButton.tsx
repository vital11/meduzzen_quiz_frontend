import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()

	return (
		<button
			onClick={() => loginWithRedirect()}
			className="py-3 w-full text-lg bg-gray-300 rounded-lg hover:bg-gray-200 active:bg-gray-400 outline-none"
		>	Continue with Auth0
		</button>
	);
};

export default LoginButton



