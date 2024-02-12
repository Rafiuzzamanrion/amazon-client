import axios from "axios";
import {MdDelete} from "react-icons/md";
import Swal from "sweetalert2";


const ManageProductCard = ({product,refetch}) => {
    const {img,name,shipping,price,seller,stock,_id} = product;

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`https://amazon-server-delta.vercel.app/deleteProduct?id=${id}`)
              .then(res => {
                refetch();
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "The product has been deleted",
                        icon: "success"
                      });
                }
              })
              .catch(error => console.log(error))
               
            }
          });

    }
    return (
        <div>
                     <div className="card md:h-80 card-side bg-base-100 shadow-xl border border-orange-400"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
      <figure>
        <img className="w-64 md:w-96 object-cover  hover:scale-110 hover:ease-in hover:duration-150" src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="font-semibold">Stock : {stock}</h2>
     
        <h2 className="font-semibold">Shipping Charge : <span className="">${shipping}</span></h2>
        <h2 className="font-semibold">
          Price :{" "}
          <span className="text-xl text-orange-400 font-bold">${price}</span></h2>
        <h2 className="font-semibold">Brand : {seller}</h2>
        <div className="card-actions md:justify-end">
          <button onClick={()=> handleDelete(_id)} className="btn bg-orange-400 mr-5 hover:scale-110 hover:ease-in hover:duration-150 hover:bg-orange-500">
            <MdDelete size={20} /> Delete
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ManageProductCard;