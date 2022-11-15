interface ErrorMessageProps {
	error: string
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
	return <p className="w-full py-3 text-center bg-red-100">{ error }</p>;
}
