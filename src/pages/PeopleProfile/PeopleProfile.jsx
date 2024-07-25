import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useParams } from "react-router-dom";

const PeopleProfile = () => {

    // ..............Find URL number...............

    // const urlId = (window.location.pathname.split('/')[2]); // Extract ID from URL
    const params = useParams();

    // console.log(urlId);

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/posts/${params.id}`)
            .then(res => res.json())
            .then(data => {
                // const foundUser = data.find(item => item._id === urlId);            //1,2,3
                setUser(data);
                console.log("foundUser", data);
            });

    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:5000/posts')
    //         .then(res => res.json())
    //         .then(data => {
    //             const foundUser = data.find(item => item._id === urlId);            //1,2,3
    //             setUser(foundUser);
    //             console.log("foundUser", foundUser);
    //         });

    // }, [urlId]);

    // user = I check whom profile.



    // ..................Fetch all data........................



    const [allPost, setAllPost] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                setAllPost(data)
            }
            );
    }, []);


    // ...............................................


    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div><span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span></div>
    }


    // .................................................................................
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    // console.log(`Today is day ${day} and the time is ${hours}:${minutes}`);
    // console.log(day);

    // .................................................................................
    let options = {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
        myDate = new Intl.DateTimeFormat([], options);

    // setInterval(() => {
    //     console.log(myDate.format(new Date()));
    // }, 10000);


    // .................................................................................
    return (
        <div className="flex gap-5 flex-col md:flex-row">
            <div className=" bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg w-full lg:w-1/3">
                <div className="border-b px-4 pb-6">
                    <div className="text-center my-4">
                        <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                            src={user.img} alt="" />
                        <div className="py-2">
                            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{user.name}</h3>
                            <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            {user.position}
                            </div>
                        </div>
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


            <div className='w-2/3 mx-auto'>
                <h3 className='text-3xl font-bold my-3'>{user.name} All Posts: </h3>
                {

                    allPost.map(post => <p key={post._id}>
                        {
                            post.email === user.email ? <p>
                                <div className="card bg-base-100 w-full shadow-xl my-5 border-l-4 border-indigo-500">
                                    <div className="card-body">
                                        <p className="absolute top-0 right-0 btn-xs btn-neutral text-black my-2">Post Time: {post.time}</p>

                                        <p>{post.desc}</p>
                                    </div>
                                </div>
                            </p> : ""
                        }
                    </p>)



                }


            </div>

        </div>
    );
};

export default PeopleProfile;



{/* <div key={post.id}>

    <div className="card bg-base-100 w-full shadow-xl my-5">
        <div className="card-body">
            <p>{post.desc}</p>
        </div>
    </div>

</div> */}