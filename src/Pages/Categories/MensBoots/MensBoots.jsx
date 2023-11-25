import {Helmet} from "react-helmet-async";
import Card from "../../../Components/Card";
import UseProducts from "../../../Hooks/UseProducts";


const MensBoots = () => {
    const [products] = UseProducts();
    const mensBoots = products.filter(product => product.category === "Men's Boot")
    return (
        <div>
            <Helmet>
                <title>Amazon | Men&apos;s Boots</title>
            </Helmet>
             <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="text-4xl font-semibold text-orange-400 my-5">Men&apos;s Boots</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    mensBoots.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
        </div>
    );
};

export default MensBoots;