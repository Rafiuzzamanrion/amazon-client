import { Link } from "react-router-dom";
import logo from "/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import ic from '/ic.png'
import Swal from "sweetalert2";


const NavBar2 = () => {
    const { user,logOutUser } = useContext(AuthContext);
    const handleLogOut = () => {
        logOutUser()
        .then(()=>{
          Swal.fire({
            position: "top",
            icon: "success",
            title: "You have successfully logged out",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error => {
          console.log(error)
        })
      }
    

  return (
    <div>
      <div className="flex justify-between bg-black p-3">
        <nav className="flex justify-center items-center">
          <Link to={'/'}><img src={logo} className="w-36 h-12" alt="" /></Link>
        </nav>
        <nav className="flex justify-center items-center">
          <Link className="text-orange-400 mr-6 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 uppercase font-semibold">
            orders
          </Link>
          <Link className="text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 uppercase font-semibold flex flex-col">
         <span className="text-sm text-orange-400 translate-y-2 translate-x-4">00</span>
         <img src={ic} className="w-12 h-8 -translate-y-3" alt="" />
          </Link>
          <Link className="text-orange-400 mr-5 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 font-semibold text-sm">
            Cart
          </Link>
        </nav>
      </div>

      {/*===================== 2nd nav ====================== */}

      <div>
        <div className="flex flex-row justify-between p-2 bg-base-100 shadow-xl uppercase mb-10">
          <nav className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-black  hover:scale-110 hover:ease-in hover:duration-150">
              <GiHamburgerMenu size={35} />
            </label>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow-xl bg-base-200 font-semibold rounded-box w-40 my-2 flex items-center justify-center text-sm"
            >
              {/*========= nav here=========  */}
              <Link
                className="mt-1 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="mt-1 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
                to={"/products/mensSneakers"}
              >
                shop now
              </Link>
              <Link
                className="mt-1 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
                to={"/skills"}
              >
                About us
              </Link>
              <Link
                className="mt-1 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
                to={"/projects"}
              >
                customer service
              </Link>
              <Link
                className="mt-1 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
                to={"/contact"}
              >
                Contact us
              </Link>
           
            </ul>
          </nav>
          {/* ======== button ========= */}
          {user ? (
            <div className="lg:hidden">
              <button onClick={handleLogOut} className="btn uppercase border-2 bg-transparent text-orange-400 border-orange-400 hover:bg-orange-400 hover:border-orange-400 hover:text-black hover:scale-110 hover:ease-in hover:duration-150">
                Logout
              </button>
            </div>
          ) : (
            <div className="lg:hidden">
              <Link to={'/login'}>
              <button className="btn uppercase border-2 bg-transparent text-orange-400 border-orange-400 hover:bg-orange-400 hover:border-orange-400 hover:text-black hover:scale-110 hover:ease-in hover:duration-150">
                Login
              </button>
              </Link>
            </div>
          )}
          
          <nav className="hidden lg:flex justify-center items-center font-semibold  text-sm">
            <Link
              className="mr-8 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="mr-8 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
              to={"/products/mensSneakers"}
            >
              shop now
            </Link>
            <Link
              className="mr-8 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
              to={"/skills"}
            >
              about us
            </Link>
            <Link
              className="mr-8 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
              to={"/projects"}
            >
              customer service
            </Link>
            <Link
              className="mr-8 text-orange-400 hover:text-orange-500 hover:scale-110 hover:ease-in hover:duration-150 "
              to={"/contact"}
            >
              Contact us
            </Link>
            {user ? (
              <div className="flex justify-center  items-center">
                <button onClick={handleLogOut} className="btn uppercase bg-transparent text-orange-400 border-orange-400 border-2 hover:bg-orange-400 hover:border-orange-400 hover:text-black hover:scale-110 hover:ease-in hover:duration-150">
                  logout
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <Link to={'/login'}>
                <button className="btn uppercase border-2 bg-transparent text-orange-400 border-orange-400 hover:bg-orange-400 hover:border-orange-400 hover:text-black hover:scale-110 hover:ease-in hover:duration-150">
                  login
                </button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;