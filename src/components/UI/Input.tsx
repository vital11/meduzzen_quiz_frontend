
interface inputData {
    type: string,
    placeholder: string,
    value: string,
    setValue: (value: string) => void
}

const Input = ({ type, placeholder, value, setValue }: inputData) => {
    return (
        <input onChange={(event) => setValue(event.target.value)}
            type={type}
            placeholder={placeholder}
            value={value}
            className="block text-md py-3 px-5 rounded-lg w-full border outline-none focus:outline-none focus:border-amber-300 focus:ring-3 focus:ring-amber-300"
        />
    )
}

export default Input;
