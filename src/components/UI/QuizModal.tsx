
interface QuizModalProps {
	children: React.ReactNode
	title?: string
	onClose: () => void
}

export default function QuizModal({ children, title, onClose }: QuizModalProps) {
	return (
		<>
			<div
				className="fixed bg-black/25 inset-0"
				onClick={ onClose }
			/>
			<div className="absolute left-1/2 -translate-x-1/2 z-10 w-full max-w-7xl h-full min-h-screen inset-20 p-10 rounded-2xl bg-white drop-shadow-lg">
				<h1 className="text-2xl text-center mb-2">{ title }</h1>
				{ children }
			</div>
		</>
	)
}
