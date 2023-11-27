import {Link} from "react-router-dom";
import logo from "/login.png";
import {useContext} from "react";
import {AuthContext} from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Forgot = () => {
  const {forgotPassword} = useContext(AuthContext);
  const handleForgot = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    forgotPassword(email)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "password reset link has sent successfully",
        text: "Please check your email to reset the password",
      })
    form.reset();
    })
    .catch(error => console.log(error))
  }
    return (
        <div>
            <div className="flex justify-center my-10">
        <form onSubmit={handleForgot} className="flex flex-col items-center justify-center bg-base-100 shadow-xl p-8 rounded-lg w-96 border border-orange-300">
          <div className="w-72">
            <Link to={'/'}><img src={logo} className="object-cover" alt="" /></Link>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Give your email address here"
              className="input input-warning input-bordered w-full max-w-md"
            />
          </div>
       
          <input className="btn mt-10 text-black bg-orange-400 w-full hover:bg-orange-500 hover:scale-105 hover:ease-in hover:duration-150" type="submit" value="Reset password" />
         
        </form>
      </div> 
        </div>
    );
};

export default Forgot;