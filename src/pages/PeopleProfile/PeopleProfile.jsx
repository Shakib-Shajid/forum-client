import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const PeopleProfile = () => {

    // .......................................

const [user, setUser] = useState([]);

const urlId = (window.location.pathname.split('/')[2]); // Extract ID from URL
// console.log(urlId);

useEffect(()=>{
fetch('http://localhost:5000/posts')
  .then(res => res.json())
  .then(data => {
    const foundUser = data.find(item => item._id === urlId);
    setUser(foundUser);
    console.log(urlId);
  });


}, []);

    // ..........Show all data.................


    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    // .......................................


const { loading } = useContext(AuthContext)

if (loading) {
     return <div><span className="loading loading-ball loading-xs"></span>
         <span className="loading loading-ball loading-sm"></span>
         <span className="loading loading-ball loading-md"></span>
         <span className="loading loading-ball loading-lg"></span></div>
 }



    return (
        <div className="flex gap-5 flex-col md:flex-row">
            <div className=" bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg w-full lg:w-2/3">
                <div className="border-b px-4 pb-6">
                    <div className="text-center my-4">
                        <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                            src={user.img} alt="" />
                        <div className="py-2">
                            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{user.name}</h3>
                            <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                                <svg className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path className=""
                                        d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                </svg>
                                New York, NY
                            </div>
                        </div>
                        <p>Total Posts: {posts.length}</p>
                    </div>

                    <div className="flex gap-2 px-2">
                        <button
                            className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                            Follow
                        </button>
                        <button
                            className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                            Message
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-lg font-bold">Total Post: {posts.length}</p>
                {
                    posts.map(post =>
                        <div key={post.id} className="border-b-8 border-r-8 my-5 w-full lg:w-2/3 shadow-lg p-4 ">
                            <h3 className="text-lg font-bold">{post.name}</h3>
                            <p >{post.desc}</p>
                        </div>)
                }
            </div>

        </div>
    );
};

export default PeopleProfile;