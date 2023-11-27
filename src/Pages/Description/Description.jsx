import { useLoaderData } from "react-router-dom";


const Description = () => {
  const product = useLoaderData();
  const { img, name } = product;
  console.log(product);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
           <img className="object-cover lg:h-5/6 w-full" src={img} alt="" />
        </div>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Description;
