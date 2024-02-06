import {useContext} from "react";
import UseCart from "../../../Hooks/UseCart";
import {AuthContext} from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";


const ProceedToCheckout = () => {
  
  const [carts] = UseCart();
  const totalQuantity = carts.reduce((sum, item) => item.quantity + sum, 0);
  const subtotal = carts.reduce((sum, item) => item.price + sum, 0);
  const vat = (subtotal * 10) / 100;
  const grandTotal = subtotal + vat;

  const {user} = useContext(AuthContext)
  const handlePayment = event => {
    event.preventDefault();
    const form = event.target;
    const address = form.address.value;
    const number = form.number.value;
    const postcode = form.postcode.value;
    const currency = form.currency.value;

    const formData = {name:user.displayName, email:user.email, address:address, number:number, postcode:postcode, currency:currency, amount:grandTotal,time:Date()}

    if(currency === 'Currency'){
        return Swal.fire({
            icon: "error",
            title: "Selection Error",
            text: "Please select currency !",
           
          });
    }

    axios.post('http://localhost:5000/postPayment',formData)
    .then(res => {
      window.location.replace(res.data.url)
        console.log(res.data)
    });
   
    axios.delete(`http://localhost:5000/deleteCarts?email=${user?.email}`)
    .then(res => {
      console.log(res.data);
    })
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="font-semibold p-8 bg-base-100 w-96 md:w-[600px] rounded-md shadow-xl mt-6 text-start border border-orange-400">
          <h1 className="text-xl my-1">
            Subtotal ({totalQuantity} items) :{" "}
            <span className="text-orange-400 font-semibold">${subtotal}</span>
          </h1>
          <h1 className="text-xl">
            Vat (10%) :{" "}
            <span className="text-orange-400 font-semibold">${vat}</span>
          </h1>
          <h1 className="text-xl font-bold my-1">
            {" "}
            Total Amount :{" "}
            <span className="font-bold text-3xl">${grandTotal}</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center my-10 mt-20">
        <form onSubmit={handlePayment} className="bg-orange-200 p-7 w-96 rounded-xl shadow-2xl">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your Address</span>
            </div>
            <input
              type="text"
              name="address"
              placeholder="Type here"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your Phone Number</span>
            </div>
            <input
            name="number"
              type="number"
              required
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your Postcode</span>
            </div>
            <input
            name="postcode"
              type="number"
              required
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <select name="currency" required className="select select-bordered w-full max-w-xs mt-8">
            <option defaultChecked>
              Currency
            </option>
            <option>BDT</option>
            <option>USD</option>
          </select>
        <div className="flex items-center justify-center my-6">
        <button type="submit" className="btn bg-orange-400 border border-orange-400 w-full hover:bg-orange-500 hover:border">PAY ${grandTotal}</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ProceedToCheckout;
