import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
    EffectFade,
  } from "swiper/modules";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import banner1 from '/banner1.jpg'
import banner2 from '/banner2.jpg'
import banner3 from '/banner3.jpg'
import banner4 from '/banner4.jpg'
import banner5 from '/banner5.jpg'
import banner6 from '/banner6.jpg'
import banner7 from '/banner7.jpg'
import banner8 from '/banner8.jpg'
import banner9 from '/banner9.jpg'




const Banner = () => {
    return (
       <section className="mt-32 lg:mt-4 shadow-xl bg-base-100" data-aos="zoom-in"data-aos-easing="linear"
       data-aos-duration="500">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,EffectFade,A11y]}
        className="mySwiper"
      >
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full" src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full"  src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full"  src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full"  src={banner4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full"  src={banner5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full"  src={banner6} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full"  src={banner7} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full"  src={banner8} alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-[480px] object-cover md:h-[680px] w-full"  src={banner9} alt="" /></SwiperSlide>
      </Swiper>
       </section>
    );
};

export default Banner;