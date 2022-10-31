interface IButtonProps {
	text: string;
	children?: React.ReactNode;
	props?: any;
	onClick: () => void;
}

export function Button({ text, children, props, onClick }: IButtonProps) {
	return (
		<button
			className="px-5 py-4 mx-1 bg-slate-100 hover:bg-violet-50 hover:text-orange-500 rounded-xl"
			onClick={onClick}
		>
			{text}
			{children}
		</button>
	);
}
