'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";

function Header() {
  const [user, setUser] = useState({ username: "", userImg: "" });
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let value = localStorage.getItem("rede-social:user");
    if (value) {
      setUser(JSON.parse(value));
    }
  }, []);

  const logout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("rede-social:token");
    localStorage.removeItem("rede-social:user");
    router.push("/login");
  };

  return (
    <header className="w-full flex bg-white justify-between py-2 px-4 items-center shadow-md">
      <Link href="/" className="font-bold text-sky-900 text-lg">FALKSBOOK</Link>
      <div className="flex bg-zinc-100 items-center text-gray-600 px-3 py-1 rounded-full">
        <input type="text" placeholder="Pesquisar" className="bg-zinc-100 outline-none" />
        <FaSearch />
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <div className="flex gap-3">
          <button className="bg-zinc-200 p-2 rounded-full hover:bg-zinc-300">
            <TbMessageCircleFilled />
          </button>
          <button className="bg-zinc-200 p-2 rounded-full hover:bg-zinc-300">
            <FaBell />
          </button>
        </div>
      </div>
      <div className="relative" onMouseLeave={() => setOpen(false)}>
        <button 
          className="flex items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          {user.userImg.length > 0 ? (
            <img
              src={user.userImg}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <FaUser className="w-8 h-8 text-gray-600 rounded-full" />
          )}
          <span className="font-bold">{user.username}</span>
        </button>
        {open && (
          <div className="absolute flex flex-col gap-2 -right-3 top-8 bg-white p-4 shadow-md rounded-md border-t whitespace-nowrap">
            <Link href='' className="border-b">Editar perfil</Link>
            <Link href='' onClick={(e) => logout(e)}>Logout</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;