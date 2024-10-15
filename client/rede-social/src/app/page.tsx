'use client'

import { useEffect } from "react";
import Header from "./components/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let value = localStorage.getItem("rede-social:user");
    if (!value) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-zinc-100">
      <Header />
    </div>
  );
}
