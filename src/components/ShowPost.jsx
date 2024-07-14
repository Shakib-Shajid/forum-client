import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Banner = ({ post }) => {

    const { user } = useContext(AuthContext);

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


    return (
        <div className="border-2 pl-2 md:pl-5 border-dashed relative border-gray-500 shadow-lg rounded-lg flex items-center  ">
            <img src={img} className="h-20 w-20 rounded-full border-2 border-blue-500 p-2 " alt="" />
            <div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>
                    {user && 
                        user.email === email ?
                            <div className="flex gap-5">
                                <button onClick={() => handleDelete(_id)} className=" btn-xs lg:btn lg:btn-neutral text-black lg:text-white">Delete Post</button>
                                <Link to={`/updatePost/${_id}`} className=" btn-xs lg:btn lg:btn-neutral text-black lg:text-white">Update Post</Link>
                            </div>
                            : ""
                    }
                </div>
            </div>
            <Link to={`/peopleprofile/${_id}`} className="absolute top-0 right-0 btn-xs lg:btn lg:btn-neutral text-black lg:text-white">Go Profile</Link>
        </div>
    );
};

export default Banner;