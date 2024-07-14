import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Post from '../../components/Post';

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
            <div className='w-2/3 mx-auto'>
                <h3 className='text-3xl font-bold my-3'>Your All Post: {myPost.length}</h3>

                    {
                        myPost.map(post =>
                            <div key={post.id}>
                                <div className="card bg-base-100 w-full shadow-xl my-5">
                                    <div className="card-body">
                                        <p>{post.desc}</p>
                                    </div>
                                </div>
                            </div>)
                    }
            </div>
        </div>

    );
};

export default Profile;