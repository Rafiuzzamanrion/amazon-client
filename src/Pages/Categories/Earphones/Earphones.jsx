import {Helmet} from "react-helmet-async";
import Card from "../../../Components/Card";
import UseProducts from "../../../Hooks/UseProducts";


const Earphones = () => {
    const [products] = UseProducts();
    const earphones = products.filter(product => product.category === 'Earphones')
    return (
       <div>
         <Helmet>
            <title>Amazon | Earphones</title>
        </Helmet>
        <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="text-4xl font-semibold text-orange-400 my-5">Earphones</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    earphones.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
       </div>
    );
};

export default Earphones;