import axios from "axios";
import UseProducts from "../../../Hooks/UseProducts";
import {useQuery} from "@tanstack/react-query";


const AdminHome = () => {
    const {data:payments = []} = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axios.get('https://amazon-server-delta.vercel.app/allPayments');
            return res.data;
        }  
    });


  const quantity = payments.reduce((sum,item)=> item.quantity + sum, 0 )
  const totalSold = payments.reduce((sum,item)=> item.amount + sum, 0 )
 

    const {data:users = []} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axios.get('https://amazon-server-delta.vercel.app/allUsers');
            return res.data;
        }  
    });
    const [products] = UseProducts();
    return (
        <div>
            <div className="stats stats-vertical md:stats-horizontal shadow-xl">
  
  <div className="stat"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
    <div className="stat-title">Sold Amount</div>
    <div className="stat-value">${parseFloat(totalSold).toFixed(2)}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
    <div className="stat-title">Total Products</div>
    <div className="stat-value">{products.length}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
    <div className="stat-title">Total Product Sold</div>
    <div className="stat-value">{quantity}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat"data-aos="zoom-in"data-aos-easing="linear"
    data-aos-duration="500">
    <div className="stat-title">Total Users</div>
    <div className="stat-value">{users.length}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;