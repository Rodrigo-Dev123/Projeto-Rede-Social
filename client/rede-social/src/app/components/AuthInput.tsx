interface AuthInputProps {
    newState: (value: string) => void;
    label: string;
    isPassword?: boolean;
}

function AuthInput({ newState, label, isPassword }: AuthInputProps) {
    return (
        <div className="flex flex-col justify-between items-start">
            <label htmlFor="email">{label}</label>
            <input
                type={isPassword ? 'password' : 'text'}
                onChange={(e) => newState(e.target.value)}
                className="border-gray-400 border-b w-full focus-visible:border-gray-700 focus-visible:border-b focus-visible:outline-none"
            >
            </input>
        </div>
    )
}

export default AuthInput;