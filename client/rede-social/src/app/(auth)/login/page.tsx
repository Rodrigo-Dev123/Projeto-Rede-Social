'use client'

import Link from "next/link";
import { useState } from "react";
import AuthInput from "../../components/AuthInput";
import { makeRequest } from "../../../../axios";
import { useRouter } from "next/navigation";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleLogin = (event: any) => {
        event.preventDefault();
        makeRequest.post('auth/login', { email, password }).then((res) => {
            localStorage.setItem('rede-social:user', JSON.stringify(res.data.data.user));
            localStorage.setItem('rede-social:token', JSON.stringify(res.data.data.token));
            setError('');
            router.push('/');
        }).catch((error: any) => {
            setError(error.response.data.message);
            console.log(error)
        });
    }

    return (
        <>
            <h1 className="font-bold text-2xl">LOGIN</h1>
            <AuthInput label="Email:" newState={setEmail} />
            <AuthInput label="Password:" newState={setpassword} />
            {error.length > 0 && <span className="text-red-500">* {error}</span>}
            <button
                className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800"
                onClick={(e) => handleLogin(e)}
            >
                ENTRAR
            </button>
            <Link href="register" className="text-center underline">Cadastrar-se</Link>
        </>
    )
}

export default Login;