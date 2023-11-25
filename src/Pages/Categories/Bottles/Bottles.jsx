import {Helmet} from "react-helmet-async";
import Card from "../../../Components/Card";
import UseProducts from "../../../Hooks/UseProducts";


const Bottles = () => {
    const [products] = UseProducts();
    const bottles = products.filter(product => product.category === 'Bottle')
    return (
      <div>
        <Helmet>
            <title>Amazon | Bottles</title>
        </Helmet>
          <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="text-4xl font-semibold text-orange-400 my-5">Bottles</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    bottles.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
      </div>
    );
};

export default Bottles;