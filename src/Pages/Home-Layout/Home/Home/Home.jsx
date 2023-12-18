import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ProductCarousel from "../../ProductSwiper/ProductCarousel";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Amazon | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ProductCarousel></ProductCarousel>
    </div>
  );
};

export default Home;
