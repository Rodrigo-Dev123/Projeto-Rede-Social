'use client'

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import AuthPage from "../components/AuthPage";
import AuthInput from "../components/AuthInput";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:8001/api/auth/login', { email, password }).then((res) => {
            setError('');
            console.log(res.data);
        }).catch((error: any) => {
            setError(error.response.data.message);
            console.log(error)
        });
    }

    return (
        <AuthPage>
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
        </AuthPage>
    )
}

export default Login;