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
        <div>
            <header>
                <img
                    src={
                        userImg
                            ? userImg
                            : 'https://on-desktop.com/wps/World___Australia_Great_Barrier_Reef__Australia_096264_.jpg'}
                    alt="Imagem do usuário que fez o post"
                />
                <div>
                    <span>{username}</span>
                    <span>06/01/2023</span>
                </div>
                {post_desc && (
                    <div>{post_desc}</div>
                )}
                {img && <img src={img} alt="imagem do post" />}
            </header>
        </div>
    )
}

export default Post;