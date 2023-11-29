import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../Providers/AuthProviders";
import Swal from "sweetalert2";


const Card = ({item}) => {
    const {_id,name,price,img} = item;
    const {user} = useContext(AuthContext);
    const handlePopup = () => {
      if(!user){
        return Swal.fire({
          icon: "warning",
          title: "Please Login",
          text: "Login first to order products !!",
        });
      }
    }

    return (
        <div>
          
            <div className="card w-96 bg-base-100 shadow-xl border border-orange-400">
  <figure className="px-5 pt-5">
    <img src={img} alt="Shoes" className="rounded-xl object-cover hover:scale-110 hover:ease-in hover:duration-200" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className="font-semibold text-orange-400">${price}</p>
    <div className="card-actions">
      <Link to={`/description/${_id}`}><button onClick={handlePopup} className="btn inline-block text-black bg-orange-400 border-orange-400 hover:bg-transparent hover:border-2 hover:border-orange-400 hover:scale-110 hover:ease-in hover:duration-200">view details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;