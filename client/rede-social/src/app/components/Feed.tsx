import Post from "./Post";

const posts = [
    {
        id: 1,
        post_desc: 'teste',
        img: 'https://on-desktop.com/wps/World___Australia_Great_Barrier_Reef__Australia_096264_.jpg',
        username: "user",
        userImg: ''
    },
    {
        id: 2,
        post_desc: 'teste',
        img: 'https://on-desktop.com/wps/World___Australia_Great_Barrier_Reef__Australia_096264_.jpg',
        username: "user",
        userImg: ''
    }
]

function Feed() {
    return (
        <div className="flex flex-col items-center gap-5">
            {posts.map((post, index) => {
                return (
                    <Post post={post} key={index} />
                )
            })}
        </div>
    )
}

export default Feed;