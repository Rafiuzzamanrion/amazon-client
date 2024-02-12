import axios from "axios";
import {useContext} from "react";
import { useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContext} from "../../Providers/AuthProviders";
import UseCart from "../../Hooks/UseCart";
import {Helmet} from "react-helmet-async";





const Description = () => {
  const product = useLoaderData();
  const { img, name, price, ratingsCount, shipping, seller, category, _id } =
    product;
    const {user} = useContext(AuthContext);
    const [,refetch] = UseCart();
   
  
  const handleAddToCart = (event) => {
    event.preventDefault();
    const form = event.target;
    const size = form.size.value;
    const color = form.color.value;
    const quantity = form.quantity.value;
    

    if (size === "Size" || color === "Color" || quantity === "Quantity") {
      return Swal.fire({
        icon: "error",
        title: "Selection Error",
        text: "Please select Size, Color and Quantity ",
      });
    }

    const subTotal = quantity * price;
    const totalPrice = subTotal + shipping;
  
    const cartData = {name:name,email:user?.email, price:totalPrice, quantity:parseInt(quantity), image:img,color:color,size:size, category:category, brand:seller, shippingCharge:shipping ,productId:_id}

    axios.post('https://amazon-server-delta.vercel.app/cart',cartData)
    .then(res => {
      if(res.data.insertedId){
        refetch()
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your order has been successfully added to cart",
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
    .catch(error => console.log(error))
  }; 
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Amazon | Description</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img className="object-cover lg:h-5/6 w-full" src={img} alt="" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold">{name}</h1>
          <div className="rating my-1">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>
            Total ratings count:{" "}
            <span className="font-semibold">{ratingsCount}</span>
          </p>
          <p className="text-lg">
            Price :{" "}
            <span className="font-bold text-2xl text-orange-400">${price}</span>
          </p>
          <p className="">
            Shipping charge : <span className="font-semibold">${shipping}</span>
          </p>
          <div>
            <form
              onSubmit={handleAddToCart}
              className="flex flex-col gap-3 mt-2"
            >
              <select
                name="size"
                required
                defaultValue={"Size"}
                className="select select-bordered select-xs w-24 max-w-xs"
              >
                <option disabled>Size</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
                <option>4XL</option>
              </select>
              <select
                name="color"
                required
                defaultValue={"Color"}
                className="select select-bordered select-xs w-24 max-w-xs"
              >
                <option disabled>Color</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Green</option>
                <option>Orange</option>
                <option>white</option>
                <option>Black</option>
              </select>
              <select
                name="quantity"
                required
                defaultValue={"Quantity"}
                className="select select-bordered select-xs w-24 max-w-xs"
              >
                <option disabled>Quantity</option>
                <option>{1}</option>
                <option>{2}</option>
                <option>{3}</option>
                <option>{4}</option>
                <option>{5}</option>
                <option>{6}</option>
                <option>{7}</option>
                <option>{8}</option>
                <option>{9}</option>
                <option>{10}</option>
                <option>{20}</option>
                <option>{50}</option>
               
                
                
              </select>
              <div>
                <div className="divider divider-start"></div>
                <p className="text-2xl font-bold">Product Details</p>
                <p className="font-semibold">
                  brand : <span className="font-bold">{seller}</span>
                </p>
                <p className="font-semibold">
                  Category : <span className="font-bold">{category}</span>
                </p>
                <p className="font-semibold">
                  Origin : <span className="font-bold">imported</span>
                </p>
                <div className="divider divider-start"></div>
              </div>
              <input
                className="btn text-black bg-orange-400 w-full hover:bg-orange-500 hover:scale-105 hover:ease-in hover:duration-150 mb-10"
                type="submit"
                value="Add to cart"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
