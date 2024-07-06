
const Post = () => {
    return (
        <div className="flex">
            <div className="bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="bg-base-100 w-96 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">This is title</h2>
                        <p>This is description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem odit provident, iure debitis repudiandae!</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;