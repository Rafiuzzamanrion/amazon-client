import {Link} from "react-router-dom";
import SocialLogin from "../../../Components/SocialLogin";
import {Helmet} from "react-helmet-async";
import logo from "/login.png";

const SignUp = () => {
    return (
        <div>
          <Helmet>
            <title>Amazon | Login</title>
          </Helmet>
          <div className="flex justify-center my-10">
            <form className="flex flex-col items-center justify-center bg-base-100 shadow-xl p-8 rounded-lg w-96 border border-orange-300">
              <div className="w-72">
               <Link to={'/'}> <img src={logo} className="object-cover" alt="" /></Link>
              </div>
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Type here"
                  className="input input-warning input-bordered w-full max-w-md"
                />
              </div>
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Type here"
                  className="input input-warning input-bordered w-full max-w-md"
                />
              </div>
              <div className="form-control w-full max-w-md">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Type here"
                  className="input input-warning input-bordered w-full max-w-md"
                />
                
              </div>
              <input className="btn text-black bg-orange-400 w-full hover:bg-orange-500 hover:scale-105 hover:ease-in hover:duration-150 mt-3" type="submit" value="sign up" />
              <h1 className="my-1">Already have an account? <Link to={'/login'} className="text-orange-400 font-bold">Login</Link></h1>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      );
};

export default SignUp;