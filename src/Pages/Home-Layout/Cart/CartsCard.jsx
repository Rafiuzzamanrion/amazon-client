import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CartsCard = ({ cart, refetch }) => {
  const { name, image, price, quantity, color, size, shippingCharge, brand, _id } =
    cart;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`https://amazon-server-delta.vercel.app/deleteCart?id=${id}`)
              .then(res => {
                refetch();
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted",
                        icon: "success"
                      });
                }
              })
              .catch(error => console.log(error))
               
            }
          });

    }
  return (
    <div className="card md:h-80 card-side bg-base-100 shadow-xl border border-orange-400"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
      <figure>
        <img className="w-64 md:w-96 object-cover  hover:scale-110 hover:ease-in hover:duration-150" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="font-semibold">Color : {color}</h2>

        <h2 className="font-semibold">Quantity : {quantity}</h2>
        <h2 className="font-semibold">Size : {size}</h2>
        <h2 className="font-semibold">Shipping Charge : <span className="">${shippingCharge}</span></h2>
        <h2 className="font-semibold">
          Total Price :{" "}
          <span className="text-xl text-orange-400 font-bold">${price}</span> <span className="text-xs">(with shipping charge)</span></h2>
        <h2 className="font-semibold">Brand : {brand}</h2>
        <div className="card-actions md:justify-end">
          <button onClick={()=> handleDelete(_id)} className="btn bg-orange-400 mr-5 hover:scale-110 hover:ease-in hover:duration-150 hover:bg-orange-500">
            <MdDelete size={20} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartsCard;
