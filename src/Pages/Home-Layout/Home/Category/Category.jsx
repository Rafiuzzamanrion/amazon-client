import {Link} from "react-router-dom";
import sneakersImg from "/banner8.jpg";
import bootsImg from "/banner7.jpg";
import pantsImg from "/pants.jpg";
import capImg from "/cap.jpg";
import bottleImg from "/banner4.jpg";
import bagImg from "/bag2.jpg";
import earphonesImg from "/earphones.jpg";












const Category = () => {
  return (
    <div className=" mb-10 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mt-20 mb-16 uppercase">
            Cate<span className="text-orange-400">gories</span>
        </h1>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
     <Link to={'/products/mensSneakers'}>
      <div>
        <div className="w-96 h-96 bg-base-100 shadow-xl rounded-md border border-orange-400">
          <figure className="px-10 pt-10 h-60">
            <img src={sneakersImg} alt="Shoes" className="rounded-xl hover:scale-110 hover:ease-in hover:duration-200 object-cover" />
          </figure>
          <div className="flex flex-col items-center text-center p-5">
            <h2 className="text-3xl font-bold"><span className="text-orange-400">Men&apos;s</span> Sneakers</h2>
          </div>
        </div>
      </div>
      </Link>
      <Link  to={'/products/earphones'}>
      <div>
        <div className="w-96 h-96 bg-base-100 shadow-xl rounded-md border border-orange-400">
          <figure className="px-10 pt-10 h-60">
            <img src={earphonesImg} alt="" className="rounded-xl hover:scale-110 hover:ease-in hover:duration-200 object-cover" />
          </figure>
          <div className="flex flex-col items-center text-center p-5">
            <h2 className="text-3xl font-bold"><span className="text-orange-400">Ear</span>phones</h2>
          </div>
        </div>
      </div>
      </Link>
      <Link to={'/products/mensBoots'}>
      <div>
        <div className="w-96 h-96 bg-base-100 shadow-xl rounded-md border border-orange-400">
          <figure className="px-10 pt-10 h-60">
            <img src={bootsImg} alt="" className="rounded-xl hover:scale-110 hover:ease-in hover:duration-200 object-cover" />
          </figure>
          <div className="flex flex-col items-center text-center p-5">
            <h2 className="text-3xl font-bold"><span className="text-orange-400">Men&apos;s</span> Boots</h2>
          </div>
        </div>
      </div>
      </Link>
      <Link to={'/products/premiumPants'}>
      <div>
        <div className="w-96 h-96 bg-base-100 shadow-xl rounded-md border border-orange-400">
          <figure className="px-10 pt-10 h-60">
            <img src={pantsImg} alt="" className="rounded-xl h-48 w-96 hover:scale-110 hover:ease-in hover:duration-200 object-cover" />
          </figure>
          <div className="flex flex-col items-center text-center p-5">
            <h2 className="text-3xl font-bold"><span className="text-orange-400">Premium </span>Pants</h2>
          </div>
        </div>
      </div>
      </Link>
      <Link to={'/products/premiumCaps'}>
      <div>
        <div className="w-96 h-96 bg-base-100 shadow-xl rounded-md border border-orange-400">
          <figure className="px-10 pt-10 h-60">
            <img src={capImg} alt="Shoes" className="rounded-xl h-48 w-96 hover:scale-110 hover:ease-in hover:duration-200 object-cover" />
          </figure>
          <div className="flex flex-col items-center text-center p-5">
            <h2 className="text-3xl font-bold"><span className="text-orange-400">Premium</span> Caps</h2>
          </div>
        </div>
      </div>
      </Link>
      <Link to={'/products/bottles'}>
      <div>
        <div className="w-96 h-96 bg-base-100 shadow-xl rounded-md border border-orange-400">
          <figure className="px-10 pt-10 h-60">
            <img src={bottleImg} alt="Shoes" className="rounded-xl hover:scale-110 hover:ease-in hover:duration-200 object-cover" />
          </figure>
          <div className="flex flex-col items-center text-center p-5">
            <h2 className="text-3xl font-bold"><span className="text-orange-400">Bot</span>tles</h2>
          </div>
        </div>
      </div>
      </Link>
      <Link to={'/products/premiumBags'}>
      <div>
        <div className="w-96 h-96 bg-base-100 shadow-xl rounded-md border border-orange-400">
          <figure className="px-10 pt-10 h-60">
            <img src={bagImg} alt="Shoes" className="rounded-xl h-48 w-96 hover:scale-110 hover:ease-in hover:duration-200 object-cover" />
          </figure>
          <div className="flex flex-col items-center text-center p-5">
            <h2 className="text-3xl font-bold"><span className="text-orange-400">Premium </span>Bags</h2>
          </div>
        </div>
      </div>
      </Link>
     
     </div>
    </div>
  );
};

export default Category;
