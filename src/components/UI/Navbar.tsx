import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"


const Navbar: React.FC = () => {
	const { currentUser, isAuth } = useTypedSelector((state) => state.auth)
	const { logout: logoutAuth0 } = useAuth0()
	const { logout } = useActions()

	const handleClick = () => {
		logout()
		logoutAuth0({ returnTo: window.location.origin })
    }

	return (
		<>
		<nav className="flex h-20 text-md bg-white text-gray-500 hover:text-gray-400">
			<div className="mx-auto w-[2500px] flex items-center justify-between">
				<span className="flex items-center pl-2">
					<NavLink to="/"> Home </NavLink>
				</span>
				{ isAuth && <div className="flex items-center">
					<span className="text-center mx-5">
						<NavLink to="/dashboard"> Dashboard </NavLink>
					</span>
					<span className="text-center mx-5">
						<NavLink to="/users"> Users </NavLink>
					</span>
					<span className="text-center mx-5">
						<NavLink to="/companies"> Companies </NavLink>
					</span>
				</div> }
				<div className="flex items-center">
					{ !isAuth ? 
					<>
						<button className="text-center mx-5 hover:text-amber-400">
							<NavLink to="/login"> Sign In </NavLink>
						</button>
						<button className="rounded-md bg-amber-400 px-10 py-2 text-white hover:bg-amber-300">
							<NavLink to="/signup"> Sign Up </NavLink>
						</button> 
					</>
					:
					<>
						<span className="text-center mx-5 text-gray-400 hover:none"> {`Hello, ${currentUser.email}`} </span>
						<button 
							className="text-center mx-5 hover:text-amber-400" 
							onClick={ handleClick }
						>	Logout
						</button>
						</>
					}
				</div>
			</div>
		</nav>
		<header className="flex h-28 bg-gray-50">
			<div className="flex items-center mx-auto w-[2500px] justify-end">
				<input 
					type="text" 
					className="w-1/3 rounded-xl p-4 pl-10 border focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300" 
					placeholder="Search..."
				/>
			</div>
		</header>
		</>
	)
}

export default Navbar
