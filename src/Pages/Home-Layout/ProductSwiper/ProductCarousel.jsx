// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Mousewheel, Keyboard, Autoplay} from 'swiper/modules';
import UseProducts from "../../../Hooks/UseProducts";
import {Link} from "react-router-dom";

const ProductCarousel = () => {
    const [products] = UseProducts();
  
  return (
    <div>
        <h1 className="text-4xl font-bold text-center my-10">Exciting <span className="text-orange-400"> Deals</span></h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{
        // clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
       {
        products?.map(product =>  <SwiperSlide key={product._id}><Link to={`/description/${product._id}`}>
        <div>
         
         <img src={product.img} alt="" />
         <h1 className="bg-orange-400 rounded-sm w-20 md:w-24 text-xs md:text-md md:p-2 md:h-10 md:-translate-y-16 translate-x-2 -translate-y-5">20% off</h1>
         {/* <button className="btn btn-outline border-2 border-orange-400 hover:bg-orange-400 hover:border-orange-400 text-black hover:text-black hover:scale-110 ease-in duration-150 translate-x-24">View</button> */}
        
         </div>
        </Link></SwiperSlide>)
       }
        
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
