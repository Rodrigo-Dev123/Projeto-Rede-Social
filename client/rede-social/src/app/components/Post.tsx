import { FaThumbsUp, FaRegComment, FaPaperPlane } from "react-icons/fa";

interface Ipost {
    id: number;
    post_desc: string;
    img: string;
    username: string;
    userImg: string;
}

function Post({ post }: { post: Ipost }) {
    const { img, post_desc, userImg, username } = post

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
            <div>
                <button><FaThumbsUp /> Curtir</button>
                <button><FaRegComment /></button>
            </div>
            <div>
                <input type='text' />
                <FaPaperPlane />
            </div>
        </div>
    )
}

export default Post;