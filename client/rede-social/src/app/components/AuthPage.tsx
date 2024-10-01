function AuthPage({ children }: { children: React.ReactNode }) {
    return (
        <main
            className="min-h-screen bg-[url('https://on-desktop.com/wps/World___Australia_Great_Barrier_Reef__Australia_096264_.jpg')] 
            flex flex-col items-center bg-cover bg-center bg-no-repeat justify-center"
        >
            <form className="flex flex-col w-1/4 bg-white px-6 py-14 gap-11 rounded-2xl">
                {children}
            </form>
        </main>
    )
}

export default AuthPage;