import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';


const Post = () => {
    const { user} = useContext(AuthContext);
    return (
        <div className="border-2 pl-2 md:pl-5 border-dashed relative border-gray-500 shadow-lg rounded-lg flex items-center my-10 gap-5">
            <img src={user.photoURL} className="h-14 w-14 rounded-full border-2 border-blue-500 p-2 " alt="" />
            <div>
                <div className=" w-full flex gap-5">

                    {/* ................................................... */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button onClick={() => document.getElementById('my_modal_5').showModal()}>
                        <input type="text" name="" id="" placeholder="what's in your mind" className="textarea textarea-bordered w-56 md:w-[600px]" />
                    </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-6">✕</button>
                            </form>
                            <div className="flex gap-2 items-center my-3">
                                <img src={user.photoURL} className="h-10 w-10 rounded-full border-2 border-black p-2 " alt="" />
                                <h3 className="font-bold text-lg">{user.displayName}</h3>
                            </div>
                            {/* <input type="text" name="" id="" placeholder="what's in your mind" className="textarea textarea-bordered w-[600px]" /> */}
                            <textarea
                                placeholder="What's in your mind"
                                className="textarea textarea-bordered textarea-lg w-full "></textarea>
                            <div className="text-center modal-middle mt-2">
                                <input type="button" value="Post" className="btn btn-success w-full text-white" />
                            </div>
                        </div>
                    </dialog>
                    {/* ................................................... */}

                </div>
            </div>
        </div>
    );
};

export default Post;