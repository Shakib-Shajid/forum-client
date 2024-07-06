
const Banner = ({ post }) => {
    const { name, position, desc, img } = post;
    return (
        <div className="border-2 pl-2 md:pl-5 border-dashed relative border-gray-500 shadow-lg rounded-lg flex items-center">
            <img src={img} className="h-20 w-20 rounded-full border-2 border-blue-500 p-2 " alt="" />
            <div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <p className="btn btn-neutral absolute top-0 right-0 text-white">Profile</p>
        </div>
    );
};

export default Banner;