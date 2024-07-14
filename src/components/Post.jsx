
import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';


const Post = () => {
    const { user } = useContext(AuthContext);

    const handlePost = event => {
        event.preventDefault();
        const form = event.target;
        const desc = form.desc.value;
        const name = user.displayName;
        const email = user.email;
        const img = user.photoURL;
        const getData = { desc, name, email, img }
        // console.log(getData);

        fetch('http://localhost:5000/posts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(getData)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.insertedId){
                alert("Added Successfully")
            }
        })
    }




    return (
        <div className="border-2 pl-2 md:pl-5 border-dashed relative border-gray-500 shadow-lg rounded-lg flex items-center my-10 gap-5 p-5">
            <img src={user.photoURL} className="h-14 w-14 rounded-full border-2 border-blue-500 p-2 " alt="" />
            <div>
                <div className=" w-full flex gap-5">
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <input type="text" name="" id="" placeholder="what's in your mind" className="textarea textarea-info w-56 md:w-[600px]" />
                    </button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-6">✕</button>
                            </form>
                            <form method="dialog" onSubmit={handlePost}>
                                {/* if there is a button in form, it will close the modal  */}
                                <div className="flex gap-2 items-center my-3">
                                    <img src={user.photoURL} className="h-10 w-10 rounded-full border-2 border-black p-2 " alt="" />
                                    <h3 className="font-bold text-lg">{user.displayName}</h3>
                                </div>
                                <textarea
                                    placeholder="What's in your mind"
                                    className="textarea textarea-bordered textarea-lg w-full " name="desc"></textarea>
                                <div className="text-center modal-middle mt-2">
                                    <button className="btn btn-success w-full text-white">Post</button>
                                </div>
                            </form >
                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default Post;