import { useContext, useEffect, useState } from "react";
import ShowPost from "../../components/ShowPost";
import Post from "../../components/Post";
import { AuthContext } from "../../providers/AuthProvider";

import { useLoaderData } from "react-router-dom";

const Home = () => {

    const { user, loading } = useContext(AuthContext)


    // const [posts, setPosts] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/posts')
    //     .then(res=>res.json())
    //     .then(data=>setPosts(data))
    // },[])

    const posts = useLoaderData();

    // ..............................................
    const [postShows, setPostShows] = useState(posts);
    // console.log("PostShows", postShows);
    // ..............................................


    if (loading) {
        return <div><span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span></div>
    }
    return (
        <div>
            {
                user && <Post />
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                   posts.map(post =>
                        <ShowPost key={post._id} post={post}
                            // ....................
                            postShows={postShows} setPostShows={setPostShows}
                        // ....................
                        />)
                }
            </div>
        </div>
    );
};

export default Home;