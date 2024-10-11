'use client'

import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";

function Header() {
  const [user, setUser] = useState({ username: "", userImg: "" });

  useEffect(() => {
    let value = localStorage.getItem("rede-socia:user");
    if (value) {
      setUser(JSON.parse(value));
    }
  }, [])

  return (
    <header className="w-full flex bg-white justify-between py-2 px-4 items-center shadow-md">
      <Link href="/" className="font-bold text-sky-900 text-lg">FALKSBOOK</Link>
      <div className="flex bg-zinc-100 items-center text-gray-600 px-3 py-1 rounded-full">
        <input type="text" placeholder="Pesquisar" className="bg-zinc-100 outline-none"/>
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
      <div className="flex items-center gap-2">
        <img
          src={
            user.userImg.length > 0
              ? user.userImg
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          className="w-8 h-8 rounded-full"
        />
        <span className="font-bold">{user.username}</span>
      </div>
    </header>
  );
}

export default Header;
