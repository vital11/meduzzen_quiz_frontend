import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { logout } from "../store/reducers/userReducer";


const Navbar = () => {
	const isAuth = useTypedSelector((state) => state.user.isAuth);
	const dispatch = useAppDispatch()

	return (
		<>
		<nav className="flex h-20 text-md bg-white text-gray-500 hover:text-gray-400">
			<div className="mx-auto w-[2500px] flex items-center justify-between">
				<span className="flex items-center pl-2">
					<NavLink to="/"> Home </NavLink>
				</span>
				<span className="text-center mx-5">
					<NavLink to="/users/me"> User Me </NavLink>
				</span>

				{ isAuth && <div className="flex items-center">
					<span className="text-center mx-5">
						<NavLink to="/users"> Users </NavLink>
					</span>
				</div> }
				<div className="flex items-center">
					{ !isAuth ? 
					<>
					<button className="text-center mx-5 hover:text-amber-400">
						<NavLink to="/login"> Login </NavLink>
					</button>
					<button className="rounded-md bg-amber-400 px-10 py-2 text-white hover:bg-amber-300">
						<NavLink to="/signup"> Sign Up </NavLink>
					</button> 
					</>
					:
					<button 
						className="text-center mx-5 hover:text-amber-400" 
						onClick={() => dispatch(logout())}
					>	Logout
					</button>
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
	);
};

export default Navbar;
