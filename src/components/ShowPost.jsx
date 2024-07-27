import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Banner = ({ post }) => {

    const { user, loading } = useContext(AuthContext);

    const { _id, name, position, desc, img, email } = post;


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

    const comment = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const email = user.email;
        const name = user.displayName;
        const photo = user.photoURL
        const id = post._id;
        console.log(comment, email, id, name, photo);
        const getData = { comment, email, id, name, photo }

        fetch('http://localhost:5000/comment', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(getData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Comment posted")
                }
            })
    }


    // 
    const [number, setNumber] = useState(0)

    const handleComment = _id => {
        const number = post._id;
        setNumber(number);
        // document.getElementById('my_modal_2').showModal();

        console.log(number);
    }


    // comment fetch
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => {
                // if(loading){
                setComments(data)
                // return <div>Loading..............................</div>   
                // }
            })
    }, [])




    return (
        <div className="border-2 pl-2 md:pl-5 border-dashed relative border-gray-500 shadow-lg rounded-lg flex items-center w-80 md:w-full ">
            <img src={img} className="h-20 w-20 rounded-full border-2 border-blue-500 p-2" alt="" />
            <div className="card-body w-52 lg:w-full">
                <h2 className="card-title"><Link to={`/peopleprofile/${_id}`}>{name}</Link></h2>
                <p>{desc}</p>
                {user &&
                    user.email === email ?
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
                                <Link to={`/updatePost/${_id}`}>Edit</Link>
                            </li>
                            <li>
                                <button onClick={() => handleDelete(_id)}>Delete</button>
                            </li>
                        </ul>

                    </div>
                    : ""
                }
                {
                    user &&
                    <form onSubmit={comment} className="flex gap-2 flex-col lg:flex-row">
                        <input className="lg:w-2/3  border-2 text-black rounded-xl p-2" placeholder="comment here" name="comment" />
                        <button className="btn btn-info text-black">Comment</button>
                    </form>
                }

                {
                    user &&
                    <div className="dropdown dropdown-top dropdown-end absolute bottom-0 right-0">
                        <div tabIndex={0} role="button" className="btn-xs" onClick={() => { handleComment(post._id) }}>Show Comment</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {
                                comments.map(comment =>
                                    comment.id === number ?
                                        <div key={comment._id}>
                                            <div className="flex my-3 gap-3">
                                                <img src={comment.photo} alt="" className="h-10 w-10 border-2 border-blue-600 rounded-full" />
                                                <div>
                                                    <p>{comment.name}</p>
                                                    <p>{comment.comment}</p>
                                                </div>
                                            </div>
                                        </div> : ''

                                )
                            }
                        </ul>
                    </div>
                }


            </div>

        </div>
    );
};

export default Banner;


