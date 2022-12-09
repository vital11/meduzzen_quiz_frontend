
interface ErrorMessageProps {
	error: string
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
	return <p className="animate-pulse relative z-10 p-4 text-center bg-red-100">{ error }</p>
}

export const Loader = () => {
	return <p className="animate-pulse relative z-10 p-4 text-center bg-blue-100">Loading...</p>
}
