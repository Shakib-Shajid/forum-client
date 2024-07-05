import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Please Login</h2>
            <form className=" md:w-3/4 lg:w-1/2 mx-auto" >
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
                    <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required name="password" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="input input-bordered" required name="cpassword" />
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