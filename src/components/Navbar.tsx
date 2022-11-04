import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="flex min-h-full bg-gray-200 text-gray-700">
				<div className="mx-auto w-[2500px] max-w-10xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
                            <NavLink to="/"> Home </NavLink>
                        </div>

						<div className="ml-4 flex items-center md:ml-6">
                            <p className="text-center text-base mx-5 hover:text-gray-500">
                                <NavLink to="/users"> Users </NavLink>
                            </p>
						</div>

                        <div className="flex h-16 items-center justify-between">
                            <p className="text-center text-base mx-5 hover:text-yellow-500">
                                <NavLink to="/signin"> Sign In </NavLink>
                            </p>
                            <p className="flex items-center justify-center rounded-md border border-transparent bg-yellow-400 px-10 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-300">
                                <NavLink to="/signup"> Sign Up </NavLink>
                            </p>
                        </div>
					</div>
				</div>
			</div>
			<header className=" bg-gray-100">
				<div className="mx-auto w-[2500px] max-w-10xl py-6 px-4 sm:px-6 lg:px-8 ">
					<h1 className="text-3xl font-bold text-gray-500"> Dashboard </h1>
				</div>
			</header>
		</>
	);
};

export default Navbar;
