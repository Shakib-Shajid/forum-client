import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';

const Profile = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);

    const [myPost, setMyPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                const ownData = data.filter(myData => myData.email === user.email)
                setMyPost(ownData);
            })
    }, [])
    // .............................................


    const handleDelete = _id => {
        fetch(`http://localhost:5000/posts/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount > 0) {
                    alert("Delete Successfully");
                }
            })
    }



    return (
        <div >
            <div className='flex gap-5 flex-col md:flex-row mt-5 justify-center'>
                <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className="bg-white overflow-hidden shadow rounded-lg border w-full md:w-1/3">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            User Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This is some information about the user.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.displayName}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.email}
                                </dd>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-2/3 mx-auto'>
                <Post />
            </div>
            <div className='w-3/4 md:w-2/3 mx-auto'>
                <h3 className='text-3xl font-bold my-3'>Your All Post: {myPost.length}</h3>

                {
                    myPost.map(post =>
                        <div key={post.id}>
                            <div className="card bg-base-100 w-full shadow-xl my-5 border-l-4 border-indigo-500">
                                <div className="card-body ">
                                    <p>{post.desc}</p>
                                  
                                    <div className="dropdown dropdown-bottom dropdown-end absolute top-0 right-0 mx-2">
                                        <div tabIndex={0} role="button" className="">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                                <path d="M2.25 12C2.25 10.4812 3.48122 9.25 5 9.25C6.51878 9.25 7.75 10.4812 7.75 12C7.75 13.5188 6.51878 14.75 5 14.75C3.48122 14.75 2.25 13.5188 2.25 12ZM5 10.75C4.30964 10.75 3.75 11.3096 3.75 12C3.75 12.6904 4.30964 13.25 5 13.25C5.69036 13.25 6.25 12.6904 6.25 12C6.25 11.3096 5.69036 10.75 5 10.75Z" fill="#1C274C" />
                                                <path d="M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12ZM12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75Z" fill="#1C274C" />
                                                <path d="M19 9.25C17.4812 9.25 16.25 10.4812 16.25 12C16.25 13.5188 17.4812 14.75 19 14.75C20.5188 14.75 21.75 13.5188 21.75 12C21.75 10.4812 20.5188 9.25 19 9.25ZM17.75 12C17.75 11.3096 18.3096 10.75 19 10.75C19.6904 10.75 20.25 11.3096 20.25 12C20.25 12.6904 19.6904 13.25 19 13.25C18.3096 13.25 17.75 12.6904 17.75 12Z" fill="#1C274C" />
                                            </svg>
                                        </div>

                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li>
                                                <Link to={`/updatePost/${post._id}`}>Edit</Link>
                                            </li>
                                            <li>
                                                <button onClick={() => handleDelete(post._id)}>Delete</button>
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>)
                }


            </div>

        </div>

    );
};

export default Profile;