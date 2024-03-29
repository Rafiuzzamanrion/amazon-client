import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_ImageUploadToken;
const AddProduct = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    // ==== add the photo to imagebb for hosting and get a image url ====
    Swal.fire({
      title: "Do you want to add this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14A44D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add to service !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgResponse) => {
            if (imgResponse.success) {
              const imgURL = imgResponse.data.display_url;
              const { name, price, category,ratings,ratingsCount,stock,shipping,brand } = data;

              if(category === 'Pick one'){
                return Swal.fire({
                  icon: "error",
                  title: "Selection Error",
                  text: "Please select one of the category",
                });
              }
              
              const newItem = {
                name,
                price: parseFloat(price),
                category:category,
                ratings:ratings,
                ratingsCount:ratingsCount,
                stock:stock,
                shipping:shipping,
                img: imgURL,
                seller:brand
              };
              console.log(newItem);
              // Math.random().toString(16).slice(2, 16)
              // ============== hosting end ======================
              // ============== post the product to database ===============
              axios
                .post("https://amazon-server-delta.vercel.app/product", newItem)
                .then((data) => {
                  if (data.data.insertedId) {
                    reset();
                    Swal.fire(
                      "Added !!",
                      `${name} has been added successfully`,
                      "success"
                    );
                  }
                });
            }
          });
      }
    });
  };

  return (
    <div>
      <form
        className="border border-warning p-10"
        onSubmit={handleSubmit(onSubmit)}
        data-aos="zoom-in"data-aos-easing="linear"
        data-aos-duration="500">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-warning input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Brand</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            {...register("brand", { required: true, maxLength: 120 })}
            className="input input-warning input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Price</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            {...register("price", { required: true, maxLength: 120 })}
            className="input input-warning input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <select  {...register("category", { required: true, maxLength: 120 })} className="select select-bordered select-warning">
            <option defaultChecked>Pick one</option>
            <option>Men&apos;s Sneaker</option>
            <option>Men&apos;s Boot</option>
            <option>Men&apos;s Pants</option>
            <option>Bag</option>
            <option>Bottle</option>
            <option>Cap</option>
            <option>Earphones</option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Stock</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            {...register("stock", { required: true, maxLength: 120 })}
            className="input input-warning input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ratings</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            {...register("ratings", { required: true, maxLength: 120 })}
            className="input input-warning input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ratings Count</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            {...register("ratingsCount", { required: true, maxLength: 120 })}
            className="input input-warning input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Shipping Charge</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            {...register("shipping", { required: true, maxLength: 120 })}
            className="input input-warning input-bordered w-full max-w-xs"
          />
        </label>

        <input
          type="file"
          {...register("image", { required: true, maxLength: 120 })}
          className="file-input file-input-bordered file-input-warning w-full max-w-xs my-3"
        />
        <div className="flex items-center justify-center">
          <input
            className="btn w-full btn-warning hover:ease-in hover:scale-110 hover:duration-150 hover:bg-orange-400"
            type="submit"
            value="ADD"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
