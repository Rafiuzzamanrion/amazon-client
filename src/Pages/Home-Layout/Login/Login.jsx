import { Helmet } from "react-helmet-async";
import logo from "/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  const { LogInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    LogInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        loggedUser;
        form.reset();
        navigate(from, { replace: true });
        Swal.fire({
          position: "top",
          icon: "success",
          title: "You have successfully Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Your password is wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Amazon | Login</title>
      </Helmet>
      <div className="flex justify-center my-10">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center bg-base-100 shadow-xl p-8 rounded-lg w-96 border border-orange-300"
        >
          <div className="w-72">
            <Link to={"/"}>
              <img src={logo} className="object-cover" alt="" />
            </Link>
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
            <label className="label my-1">
              <span className="label-text-alt">
                <Link className="link-hover" to={"/forgot"}>
                  Forgot your password ?
                </Link>
              </span>
            </label>
          </div>
          <input
            className="btn text-black bg-orange-400 w-full hover:bg-orange-500 hover:scale-105 hover:ease-in hover:duration-150"
            type="submit"
            value="Login"
          />
          <p className="my-2 text-sm">
            Don&apos;t have an account?{" "}
            <Link to={"/signUp"} className="text-orange-400 font-bold">
              sign up
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
