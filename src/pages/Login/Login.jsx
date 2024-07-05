import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Please Login</h2>
            <form className=" md:w-3/4 lg:w-1/2 mx-auto" >
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-4">Dont have an account <Link to="/register" className="text-blue-600 font-bold">Register</Link></p>
            <div className="btn  btn-success form-control md:w-3/4 lg:w-1/2 mx-auto mt-4 ">     
                    <button className="flex">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;