import {Helmet} from "react-helmet-async";
import Card from "../../../Components/Card";
import UseProducts from "../../../Hooks/UseProducts";


const MensSneaker = () => {
    const [products] = UseProducts();
    const sneakers = products.filter(product => product.category === "Men's Sneaker")
    return (
        <div>
            <Helmet>
                <title>Amazon | Men&apos;s Sneakers</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-semibold text-orange-400 text-center my-5">Sneakers</h1>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
           {
                sneakers.map(item => <Card key={item._id} item = {item}></Card>)
            }
           </div>
        </div>
        </div>
    );
};

export default MensSneaker;