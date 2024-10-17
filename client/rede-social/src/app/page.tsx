'use client'

import { useEffect } from "react";
import Header from "./components/Header";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let value = localStorage.getItem("rede-social:user");
    if (!value) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-100">
      <Header />
      <div className="w-full flex justify-start pt-10">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
