import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdatePost = () => {
    const params = useParams();
    // console.log(params.id);

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/posts/${params.id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const handleUpdate = event => {

        event.preventDefault();
        const form = event.target;
        const desc = form.desc.value;
        const updateinfo = { desc }
        // console.log(updateinfo);

        fetch(`http://localhost:5000/posts/${params.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateinfo)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount>0){
                alert('Updated Successfully');
            }
        })
    }

    return (
        <div className='w-2/3 mx-auto'>
            <form onSubmit={handleUpdate}>
                <h3 className='text-center text-3xl font-bold my-5'>Update Post</h3>
                <textarea className="textarea textarea-bordered textarea-lg w-full h-auto" name="desc" defaultValue={post.desc}></textarea>
                <button className="btn btn-success w-full text-white">Update Post</button>
            </form>
        </div>
    );
};

export default UpdatePost;
