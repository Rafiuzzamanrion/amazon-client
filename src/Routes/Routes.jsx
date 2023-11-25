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
import Description from "../Pages/Description/Description";




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
        {
          path:'description',
          element:<Description></Description>
        }
      ]
    }
  ]);

  export default router;