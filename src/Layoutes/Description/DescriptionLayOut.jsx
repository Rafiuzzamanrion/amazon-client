
import {Link, Outlet} from "react-router-dom";
import Reviews from "../../Pages/Description/Reviews";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/NavBar/NavBar";


const DescriptionLayOut = () => {
    return (
        <div>
        <NavBar></NavBar>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
         {/* <label
            htmlFor="my-drawer"
            className="my-3 btn btn-ghost drawer-button hover:scale-110 hover:ease-in hover:duration-150 hover:bg-transparent uppercase"
          >
            <GiHamburgerMenu />
            All Categories
          </label> */}
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side font-bold">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 py-16 w-72 min-h-full bg-orange-300 text-black">
            {/* Sidebar content here */}
            <li>
              <Link className="hover:scale-110 hover:ease-in hover:duration-150" to={'/products/mensSneakers'}>Men&apos;s Sneakers</Link>
            </li>
            <li>
              <Link className="hover:scale-110 hover:ease-in hover:duration-150" to={'/products/earphones'}>Earphones</Link>
            </li>
            <li>
              <Link className="hover:scale-110 hover:ease-in hover:duration-150" to={'/products/mensBoots'}>Men&apos;s Boots</Link>
            </li>
            <li>
              <Link className="hover:scale-110 hover:ease-in hover:duration-150" to={'/products/premiumPants'}>Premium Pants</Link>
            </li>
            <li>
              <Link className="hover:scale-110 hover:ease-in hover:duration-150" to={'/products/premiumCaps'}>Premium Caps</Link>
            </li>
            <li>
              <Link className="hover:scale-110 hover:ease-in hover:duration-150" to={'/products/bottles'}>Bottles</Link>
            </li>
            <li>
              <Link className="hover:scale-110 hover:ease-in hover:duration-150" to={'/products/premiumBags'}>Premium Bags</Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>
      </div>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
      );
};

export default DescriptionLayOut;