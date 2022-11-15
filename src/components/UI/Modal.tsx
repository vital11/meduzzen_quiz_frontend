interface ModalProps {
	children: React.ReactNode;
	title: string;
	onClose: () => void;
}

export default function Modal({ children, title, onClose }: ModalProps) {
	return (
		<>
			<div
				className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
				onClick={onClose}
			/>
			<div className="w-[600px] absolute top-40 left-1/2 -translate-x-1/2 z-10 p-10 rounded-xl bg-white drop-shadow-lg">
				<h1 className="text-2xl text-center mb-2">{title}</h1>
				{children}
			</div>
		</>
	);
}
