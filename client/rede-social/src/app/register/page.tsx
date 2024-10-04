'use client'

import { useState } from "react";
import AuthInput from "../components/AuthInput";
import AuthPage from "../components/AuthPage";
import Link from "next/link";
import axios from "axios";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:8001/api/auth/register',
            { username, email, password, confirmPassword }).then((res) => {
                setSuccess(res.data.message);
                setError('');
                console.log(res.data);
            }).catch((error: any) => {
                setError(error.response.data.message);
                setSuccess('');
                console.log(error)
            });
    }

    return (
        <AuthPage>
            <h1 className="font-bold text-2xl">REGISTER</h1>
            <AuthInput label="Nome:" newState={setUsername} />
            <AuthInput label="Email:" newState={setEmail} />
            <AuthInput label="Senha:" newState={setPassword} />
            <AuthInput label="Confirmar sua senha:" newState={setConfirmPassword} />
            {error.length > 0 && <span className="text-red-500">* {error}</span>}
            {success.length > 0 && <span className="text-green-500">* {success}</span>}
            <button
                className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800"
                onClick={(e) => handleRegister(e)}
            >
                Cadastrar-se
            </button>
            <Link href="/login" className="text-center underline">Logar</Link>
        </AuthPage>
    )
}

export default Register;