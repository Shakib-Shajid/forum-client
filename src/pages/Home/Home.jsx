import { useState, useEffect, useContext } from "react";
import ShowPost from "../../components/ShowPost";
import Post from "../../components/Post";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {

    const [posts, setPosts] = useState([]);
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    if (loading) {
        return <div><span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span></div>
    }
    return (
        <div>
            <Post />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    posts.map(post =>
                        <ShowPost key={post.id} post={post}

                        />)
                }
            </div>
        </div>
    );
};

export default Home;