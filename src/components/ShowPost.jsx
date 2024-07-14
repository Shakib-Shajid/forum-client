import { Link } from "react-router-dom";

const Banner = ({ post }) => {

    const { _id, name, position, desc, img } = post;
    return (
        <div className="border-2 pl-2 md:pl-5 border-dashed relative border-gray-500 shadow-lg rounded-lg flex items-center  ">
            <img src={img} className="h-20 w-20 rounded-full border-2 border-blue-500 p-2 " alt="" />
            <div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>
                </div>
            </div> 
            <Link to={`/peopleprofile/${_id}`} className="absolute top-0 right-0 btn-xs lg:btn lg:btn-neutral text-black lg:text-white">Go Profile</Link>
        </div>
    );
};

export default Banner;