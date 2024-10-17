'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAlignLeft, FaBookmark, FaCalendar, FaPeopleArrows, FaRegFlag, FaStore, FaUser, FaUserFriends } from "react-icons/fa";
import { TbClockHour4, TbDeviceImac } from "react-icons/tb";

interface Iuser {
    userImg: string;
    username: string
}

function Sidebar() {
    const [user, setUser] = useState<Iuser | undefined>(undefined);

    useEffect(() => {
        let value = localStorage.getItem("rede-social:user");
        if (value) {
          setUser(JSON.parse(value));
        }
      }, []);
    return (
        <anside className="pl-4">
            <nav className="flex flex-col gap-6 text-gray-600 font-semibold">
                <Link href="" className="flex items-center gap-2 pb-6">
                    {user?.userImg ? (
                        <img
                            src={user.userImg}
                            className="w-8 h-8 rounded-full"
                        />
                    ) : (
                        <FaUser className="w-8 h-8 text-gray-600 rounded-full" />
                    )}
                    <span>Usuario</span>
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaUserFriends className="w-6 h-6" />
                    Usuario
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaAlignLeft className="w-6 h-6" />
                    Feed
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaPeopleArrows className="w-6 h-6" />
                    Grupos
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaStore className="w-6 h-6" />
                    Loja
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <TbDeviceImac className="w-6 h-6" />
                    Whatch
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <TbClockHour4 className="w-6 h-6" />
                    Lembranças
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaBookmark className="w-6 h-6"/>
                    Salvo
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaRegFlag className="w-6 h-6" />
                    Página
                </Link>
                <Link href="" className="flex gap-3 items-center">
                    <FaCalendar className="w-6 h-6" />
                    Eventos
                </Link>
            </nav>
        </anside>
    )
}

export default Sidebar;