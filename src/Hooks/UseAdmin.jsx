import {useContext} from "react";
import {AuthContext} from "../Providers/AuthProviders";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const UseAdmin = () => {
   
    const {user,loading} = useContext(AuthContext);
    const {data:admin,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!loading ,
        queryFn: async ()=> {
            const res = await axios.get(`http://localhost:5000/isAdmin?email=${user?.email}`);
            return res.data;
        }
    })
return [admin,isAdminLoading]
}; 

export default UseAdmin;