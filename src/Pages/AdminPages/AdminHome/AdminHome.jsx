import axios from "axios";
import UseProducts from "../../../Hooks/UseProducts";
import {useQuery} from "@tanstack/react-query";


const AdminHome = () => {
    const {data:payments = []} = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allPayments');
            return res.data;
        }  
    });

    
  const quantity = payments.reduce((sum,item)=> item.quantity + sum, 0 )
  const totalSold = payments.reduce((sum,item)=> item.amount + sum, 0 )
 

    const {data:users = []} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allUsers');
            return res.data;
        }  
    });
    const [products] = UseProducts();
    return (
        <div>
            <div className="stats stats-vertical md:stats-horizontal shadow-xl">
  
  <div className="stat">
    <div className="stat-title">Sold Amount</div>
    <div className="stat-value">${totalSold}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Total Products</div>
    <div className="stat-value">{products.length}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Total Product Sold</div>
    <div className="stat-value">{quantity}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat">
    <div className="stat-title">Total Users</div>
    <div className="stat-value">{users.length}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;