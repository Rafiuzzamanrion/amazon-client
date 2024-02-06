
import UseProducts from "../../../Hooks/UseProducts";
import ManageProductCard from "./ManageProductCard";


const ManageProduct = () => {

    const [products,refetch] = UseProducts();
   
    return (
        <div className="grid grid-cols-1 gap-5 my-10">
            <h1 className="text-4xl font-bold my-5 text-center uppercase">Manage Products</h1>
            
    {
        products.map(product => <ManageProductCard key={product._id} product={product} refetch={refetch}></ManageProductCard>)
    }
        </div>
    );
};

export default ManageProduct;