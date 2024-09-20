import Link from "next/link";

function Login() {
    return (
        <main
            className="min-h-screen bg-[url('https://on-desktop.com/wps/World___Australia_Great_Barrier_Reef__Australia_096264_.jpg')] 
            flex flex-col items-center bg-cover bg-center bg-no-repeat justify-center"
        >
            <form className="flex flex-col bg-white px-6 py-14 gap-11 rounded-2xl">
                <h1>LOGIN</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"></input>
                </div>
                <button>ENTRAR</button>
                <Link href="register">Cadastrar</Link>
            </form>
        </main>
    )
}

export default Login;