interface ErrorMessageProps {
	error: string
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
	return <p className="animate-pulse w-[700px] absolute top-20 left-1/2 -translate-x-1/2 z-10 p-4 rounded-b-full text-center bg-red-100">{ error }</p>;
}

export const Loader = () => {
	return (
		<p className="animate-pulse w-[700px] absolute top-20 left-1/2 -translate-x-1/2 z-10 p-4 rounded-b-full text-center bg-blue-100">Loading...</p>
	)
}
