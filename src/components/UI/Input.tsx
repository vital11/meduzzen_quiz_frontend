
interface inputData {
    type: string,
    placeholder: string,
    value: string,
    setValue: (value: string) => void
}

const Input = ({ type, placeholder, value, setValue }: inputData) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:ring-1 focus:outline-none focus:ring-yellow-400"
            onChange={(event) => setValue(event.target.value)}
        />
    )
}

export default Input;