import {
    createBrowserRouter,
   
  } from "react-router-dom";

import Home from "../Pages/Home-Layout/Home/Home/Home";
import Main from "../Layoutes/Home/Main";
import Products from "../Layoutes/Products/Products";
import MensSneaker from "../Pages/Categories/MensSneakers/MensSneaker";
import Earphones from "../Pages/Categories/Earphones/Earphones";
import MensBoots from "../Pages/Categories/MensBoots/MensBoots";
import PremiumBags from "../Pages/Categories/PremiumBags/PremiumBags";
import PremiumCaps from "../Pages/Categories/PremiumCaps/PremiumCaps";
import PremiumPants from "../Pages/Categories/PremiumPants/PremiumPants";
import Bottles from "../Pages/Categories/Bottles/Bottles";
import Login from "../Pages/Home-Layout/Login/Login";
import SignUp from "../Pages/Home-Layout/SignUp/SignUp";
import Forgot from "../Pages/Home-Layout/Login/Forgot";
import DescriptionLayOut from "../Layoutes/Description/DescriptionLayOut";
import Description from "../Pages/Description/Description";
import PrivateRoutes from "./PrivateRoutes";
import Cart from "../Pages/Home-Layout/Cart/Cart";
import Reviews from "../Pages/Description/Reviews";
import AdminLayout from "../Layoutes/AdminLayout/AdminLayout";
import AdminRoutes from "./AdminRoutes";
import AdminHome from "../Pages/AdminPages/AdminHome/AdminHome";
import ManageCustomers from "../Pages/AdminPages/ManageCustomers/ManageCustomers";
import AddProduct from "../Pages/AdminPages/AddProduct/AddProduct";
import ManageProduct from "../Pages/AdminPages/ManageProducts/ManageProduct";
import ProceedToCheckout from "../Pages/Payments/ProceedToCheckout/ProceedToCheckout";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../Pages/Payments/PaymentFailed/PaymentFailed";
import CustomerPayment from "../Pages/Payments/CustomerPayment/CustomerPayment";
import ContactUs from "../Pages/Home-Layout/Contacts/ContactUs";






  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[

        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'forgot',
          element:<Forgot></Forgot>
        },
        {
          path:'cart',
          element:<PrivateRoutes><Cart></Cart></PrivateRoutes>
        },
        {
          path:'customerReview',
          element:<Reviews></Reviews>
        },
        {
          path:'proceedToCheckout',
          element:<ProceedToCheckout></ProceedToCheckout>
        },
        {
          path:'payment/success/:tranId',
          element:<PaymentSuccess></PaymentSuccess>
        },
        {
          path:'payment/failed/:tranId',
          element:<PaymentFailed></PaymentFailed>
        },
        {
          path:'customerPayment',
          element:<CustomerPayment></CustomerPayment>
        },
        {
          path:'contact',
          element:<ContactUs></ContactUs>
        }
      




      ]
    },
    {
      path:'products',
      element:<Products></Products>,
      children:[
        {
          path:'mensSneakers',
          element:<MensSneaker></MensSneaker>
        },
        {
          path:'earphones',
          element:<Earphones></Earphones>
        },
        {
          path:'mensBoots',
          element:<MensBoots></MensBoots>
        },
        {
          path:'premiumBags',
          element:<PremiumBags></PremiumBags>
        },
        {
          path:'premiumCaps',
          element:<PremiumCaps></PremiumCaps>
        },
        {
          path:'premiumPants',
          element:<PremiumPants></PremiumPants>
        },
        {
          path:'bottles',
          element:<Bottles></Bottles>
        },
       
      ]
    },
    {
      
       path:'description',
       element:<DescriptionLayOut></DescriptionLayOut>,
       children:[
        {
          path:':id',
          element:<PrivateRoutes><Description></Description></PrivateRoutes>,
          loader:({params})=> fetch(`http://localhost:5000/description/${params.id}`)
        }
       ]
      
    },
    {
      path:'admin',
      element:<AdminRoutes><AdminLayout></AdminLayout></AdminRoutes>,
      children:[
        {
          path:'adminHome',
          element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path:'manageCustomers',
          element:<ManageCustomers></ManageCustomers>
        },
        {
          path:'addProduct',
          element:<AdminRoutes><AddProduct></AddProduct></AdminRoutes>
        },
        {
          path:'manageProduct',
          element:<AdminRoutes><ManageProduct></ManageProduct></AdminRoutes>
        }
      ]
    }
  ]);

  export default router;