'use client'

import Link from "next/link";
import { useState } from "react";
import AuthInput from "../../components/AuthInput";
import { makeRequest } from "../../../../axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event: any) => {
        event.preventDefault();
        makeRequest.post('auth/login', { email, password }).then((res) => {
            localStorage.setItem('rede-socia:user', JSON.stringify(res.data.data.user));
            localStorage.setItem('rede-socia:token', JSON.stringify(res.data.data.token));
            setError('');
            console.log(res.data);
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