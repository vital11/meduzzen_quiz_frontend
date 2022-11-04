import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userAPI } from "../api/userAPI";
import { IUser } from "../types/user";

export default function UserProfile() {
    const {id} = useParams<{id: string}>();
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        userAPI.readUser(id, setUser)
    }, [])

	return (
		<div className="overflow-hidden bg-white shadow sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg font-medium leading-6 text-gray-900">
					User Information
				</h3>
				<p className="mt-1 max-w-2xl text-sm text-gray-500">
					Personal details
				</p>
			</div>
			<div className="border-t border-gray-200">
				<dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">
                            Email
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {user?.email}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">
                            Name
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {user?.name}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">
							Is Active
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {String(user?.is_active)}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">
							Is Superuser
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {String(user?.is_superuser)}
						</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">
							ID
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {user?.id}
						</dd>
					</div>

					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">
							Update Your Information
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
							<ul
								role="list"
								className="divide-y divide-gray-200 rounded-md border border-gray-200"
							>
								<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm bg-white">
									<div className="flex w-0 flex-1 items-center">
										<span className="ml-2 w-0 flex-1 truncate">
											...
										</span>
									</div>
								</li>
								<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm bg-white">
									<div className="flex w-0 flex-1 items-center">
										<span className="ml-2 w-0 flex-1 truncate">
											...
										</span>
									</div>
								</li>
							</ul>
						</dd>
					</div>

					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

						<dt className="text-sm font-medium text-gray-500"></dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <div className="text-center mt-6">
                                <button
                                    type="submit"
                                    className="py-3 w-full text-lg text-white bg-yellow-400 rounded-lg hover:bg-yellow-300 active:bg-yellow-500 outline-none"
                                    // onClick={() => userAPI.createUser(email, password)}
                                >   Update
                                </button>
                            </div>
						</dd>

						<dt className="text-sm font-medium text-gray-500"></dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <div className="text-center mt-6">
                                <button
                                    type="submit"
                                    className="py-3 w-full text-lg text-white bg-yellow-400 rounded-lg hover:bg-yellow-300 active:bg-yellow-500 outline-none"
                                    onClick={() => userAPI.deleteUser(id)}
                                >   Delete Profile
                                </button>
                            </div>
						</dd>

					</div>
				</dl>
			</div>
		</div>
	);
}
