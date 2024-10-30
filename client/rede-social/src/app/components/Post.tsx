import { useEffect, useState } from "react";
import { FaThumbsUp, FaRegComment, FaPaperPlane, FaUser } from "react-icons/fa";

interface Ipost {
    id: number;
    post_desc: string;
    img: string;
    username: string;
    userImg: string;
}

interface Iuser {
    userImg: string;
    username: string
}

function Post({ post }: { post: Ipost }) {
    const { img, post_desc, userImg, username } = post

    const [user, setUser] = useState<Iuser | undefined>(undefined);

    useEffect(() => {
        let value = localStorage.getItem("rede-social:user");
        if (value) {
          setUser(JSON.parse(value));
        }
      }, []);

    return (
        <div className="w-1/3 bg-white rounded-lg p-4">
            <header className="flex gap-2 pb-4 border-b items-center">
                <img
                    className="w-8 h-8 rounded-full"
                    src={
                        userImg
                            ? userImg
                            : 'https://on-desktop.com/wps/World___Australia_Great_Barrier_Reef__Australia_096264_.jpg'}
                    alt="Imagem do usuário que fez o post"
                />
                <div className="flex flex-col">
                    <span className="font-semibold">{username}</span>
                    <span className="text-xs">06/01/2023</span>
                </div>
            </header>
            {post_desc && (
                <div className="py-4 w-full">
                    <span>{post_desc}</span>
                </div>
            )}
            {img && <img className="rounded-lg" src={img} alt="imagem do post" />}
            <div className="flex justify-between py-4 border-b">
                <div className="flex gap-1 items-center">
                    <span className="bg-blue-600 w-6 h-6 text-white text-xs flex items-center justify-center rounded-full">
                        <FaThumbsUp />
                    </span>
                    3
                </div>
                <span>5 comentários</span>
            </div>
            <div className="flex justify-around py-4 text-gray-600 border-b">
                <button className="flex items-center gap-1">
                    <FaThumbsUp /> Curtir
                </button>
                <button className="flex items-center gap-1">
                    <FaRegComment /> Comentar
                </button>
            </div>
            <div className="flex gap-4 pt-6">
                {user?.userImg ? (
                    <img
                        src={user.userImg}
                        className="w-8 h-8 rounded-full"
                    />
                ) : (
                    <FaUser className="w-8 h-8 text-gray-600 rounded-full" />
                )}
                <div
                    className="w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full"
                >
                    <input
                        className="bg-zinc-100 w-full focus-visible:outline-none"
                        type='text'
                    />
                    <FaPaperPlane />
                </div>
            </div>
        </div>
    )
}

export default Post;