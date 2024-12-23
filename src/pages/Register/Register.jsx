import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();
        // console.log(event);
        const form = event.target;
        const name = form.name.value; 
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name,email,photo, password);

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
            // console.log(user);
        })
    }
    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Register</h2>
            <form className=" md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Full Name" className="input input-bordered" required name="name" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="PhotoURL" className="input input-bordered" required name="photo" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" className="input input-bordered" required name="password" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>
        </div>
    );
};

export default Register;