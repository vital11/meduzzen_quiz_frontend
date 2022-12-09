import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"


interface DialogModalProps {
	children: React.ReactNode;
	buttonName: string
    title: string
    message: string
}

export default function DialogModal({ buttonName, title, message, children }: DialogModalProps) {
	const [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<>
			<div className="flex items-center justify-center">
				<button
					type="button"
					onClick={openModal}
					className="px-5 py-3 rounded-xl text-lg font-medium text-white bg-gray-200 hover:bg-gray-300 active:bg-gray-400 outline-none"
				>
					{ buttonName }
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform space-y-4 overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium text-gray-500"
									>
										{ title }
									</Dialog.Title>
									<div className="">
										<p className="text-gray-500">
											{ message }
										</p>
									</div>

									<div className="pt-2">
										{ children }
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
