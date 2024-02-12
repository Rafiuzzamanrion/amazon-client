import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useContext} from "react";
import {Helmet} from "react-helmet-async";
import {FaCheckCircle} from "react-icons/fa";
import {AuthContext} from "../../../Providers/AuthProviders";



const CustomerPayment = () => {

    const {user} = useContext(AuthContext)
    const {data:customerPayments = []} = useQuery({
        queryKey: ['loadSpecificCustomerPayment'],
        queryFn: async () => {
            const res = await axios.get(`https://amazon-server-delta.vercel.app/loadSpecificCustomerPayment?email=${user?.email}`);
            return res.data;
        }  
    });
    
    return (
        <div>
            <div>
                <Helmet>
                    <title>Amazon | History</title>
                </Helmet>
            <div className="overflow-x-auto min-h-screen mt-12" data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500">
                <h1 className="text-4xl font-bold text-center my-5 uppercase">Payment <span className="text-orange-400">history</span></h1>
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th> 

        <td>Transaction Id</td> 
        <td>Order Time</td> 
        <td>Amount</td> 
        <td>Status</td> 
        
        <th></th> 
      </tr>
    </thead> 
    <tbody>
     {
        customerPayments.map((customerPayment,index) =>  <tr key={customerPayment.transactionId}>
            <th>{index+1}</th> 
            <td>{customerPayment.transactionId}</td> 
            <td>{customerPayment.time}</td> 
            <td>${customerPayment.amount}</td> 
            <td className="flex gap-2 text-success"><FaCheckCircle /> {customerPayment.paidStatus === true && 'Success'}</td> 
          </tr>)
     }
      
    </tbody> 
  </table>
</div>
            </div>
        </div>
    );
};

export default CustomerPayment;