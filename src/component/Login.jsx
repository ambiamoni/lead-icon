import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-br from-blue-500 to-purple-500">
            <div className="hero-content flex-col text-center text-white">
                <Link to="/">
                    <h2 className='font-bold text-5xl mb-2'>
                        Lead
                    </h2>
                    <span className='bg-white text-gray-800 m-0 tracking-wide rounded-full py-2 px-4 font-bold text-4xl'>Icon</span>
                </Link>
                <div className="card flex-shrink-0 w-full max-w-md mx-auto mt-10 shadow-2xl bg-white rounded-lg">
                    <div className="card-body px-8 py-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800 font-bold">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered border-gray-400" />
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text text-gray-800 font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered border-gray-400" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-gray-500 font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-gradient-to-br from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;