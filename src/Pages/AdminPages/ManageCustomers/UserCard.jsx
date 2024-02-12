import axios from "axios";
import { MdDelete } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";

const UserCard = ({ user, refetch }) => {
  const { name, email, role, _id } = user;

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Do you want to make him Admin ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it !",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`https://amazon-server-delta.vercel.app/updateUser?id=${id}`).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Updated!",
              text: `${name} is now an Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://amazon-server-delta.vercel.app/deleteUser?id=${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted successfully",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border border-orange-400"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <div className="card-actions justify-between">
            {role === "admin" ? (
              <h1 className="flex gap-1 text-orange-400 text-lg font-bold text-center">
                <MdOutlineAdminPanelSettings size={25} />
                ADMIN
              </h1>
            ) : (
              <button
                onClick={() => handleMakeAdmin(_id)}
                className="btn bg-transparent border-2 border-orange-400 hover:border-orange-400 hover:bg-orange-400 hover:scale-110 hover:ease-in hover:duration-200"
              >
                Make Admin
              </button>
            )}
            <button
              onClick={() => handleDeleteUser(_id)}
              className="btn bg-orange-400 hover:border-orange-400 hover:bg-orange-400 hover:scale-110 hover:ease-in hover:duration-200"
            >
              <MdDelete size={20} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
