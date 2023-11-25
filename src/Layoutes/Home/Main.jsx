import {Outlet} from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar2 from "../../Pages/Shared/NavBar/NavBar2";


const Main = () => {
    return (
        <div>
            <NavBar2></NavBar2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;