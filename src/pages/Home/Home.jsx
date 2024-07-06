import { useState, useEffect } from "react";
import Banner from "../../components/Banner";

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h3>This is home: {posts.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    posts.map(post => <Banner key={post.id} post={post} />)
                }
            </div>

        </div>
    );
};

export default Home;