
interface ModalProps {
	children: React.ReactNode
	title?: string
	onClose: () => void
}

export default function Modal({ children, title, onClose }: ModalProps) {
	return (
		<>
			<div
				className="fixed bg-black/25 inset-0"
				onClick={ onClose }
			/>
			<div className="fixed left-1/2 -translate-x-1/2 top-1/4 z-10 w-full max-w-lg transform p-10 rounded-2xl bg-white drop-shadow-lg">
				<h1 className="text-2xl text-center mb-2">{ title }</h1>
				{ children }
			</div>
		</>
	)
}
