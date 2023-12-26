import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Components/SocialLogin";
import { Helmet } from "react-helmet-async";
import logo from "/login.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const { handleCreateUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // validation or pass expression
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password must have a uppercase character!",
      });
      return;
    } else if (!/^(?=.*[a-z]).*$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password must have a lowercase character!",
      });
      return;
    } else if (
      !/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password must have a special character!",
      });
      return;
    } else if (!password.length >= 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password must have 8 characters!",
      });
      return;
    }

    handleCreateUser(email, password)
      .then((result) => {
        const signInUser = result.user;
        form.reset();
        signInUser;

        //   ================ update user name ================
        updateUserProfile(name)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        //    ================ post user details to database =============
        const saveUser = { name: name, email: email};
        axios.post("http://localhost:5000/users", saveUser).then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "You have successfully created an account",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Amazon | Sign up</title>
      </Helmet>
      <div className="flex justify-center my-10">
        <form
          onSubmit={handleSignUp}
          className="flex flex-col items-center justify-center bg-base-100 shadow-xl p-8 rounded-lg w-96 border border-orange-300"
        >
          <div className="w-72">
            <Link to={"/"}>
              {" "}
              <img src={logo} className="object-cover" alt="" />
            </Link>
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
          <input
            className="btn text-black bg-orange-400 w-full hover:bg-orange-500 hover:scale-105 hover:ease-in hover:duration-150 mt-3"
            type="submit"
            value="sign up"
          />
          <p className="my-2 text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="text-orange-400 font-bold">
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
