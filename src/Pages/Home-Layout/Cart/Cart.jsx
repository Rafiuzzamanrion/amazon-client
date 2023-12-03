import {Helmet} from "react-helmet-async";
import UseCart from "../../../Hooks/UseCart";
import CartsCard from "./CartsCard";
import {Link} from "react-router-dom";


const Cart = () => {
    const [carts,refetch] = UseCart();
    const totalQuantity = carts.reduce((sum,item) => item.quantity + sum,0);
    const subtotal = carts.reduce((sum,item) => item.price + sum,0);

    return (
        <div className="flex flex-col justify-center items-center">
            <Helmet>
                <title>Amazon | My cart</title>
            </Helmet>
            <h1 className="text-4xl text-center font-bold">Shopping <span className="text-orange-400">Cart</span></h1>

            <div className="font-semibold p-8 bg-base-100 w-96 rounded-md shadow-xl mt-6 text-center border border-orange-400">
                <h1 className="text-xl">Subtotal ({totalQuantity} items) : <span className="text-orange-400 font-semibold">${subtotal}</span></h1>
               <Link to={'/proceedToCheckout'}> <button className="btn bg-orange-400 mt-3 hover:scale-110 hover:duration-150 hover:ease-in hover:bg-orange-500">Proceed to checkout</button></Link>
            </div>

            <div className="grid grid-cols-1 gap-5 my-8 justify-center lg:w-10/12">
                {
                    carts.map(cart => <CartsCard key={cart._id} cart = {cart} refetch = {refetch}></CartsCard> )
                }
            </div>
        </div>
    );
};

export default Cart;