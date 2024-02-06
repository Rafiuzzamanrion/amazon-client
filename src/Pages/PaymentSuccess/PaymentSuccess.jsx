import {FaCheckCircle} from "react-icons/fa";

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen mt-16">
            <h1  className="gap-2 flex text-6xl font-bold text-success uppercase justify-center items-center"><span><FaCheckCircle /></span>payment successful</h1>
            <h1 className="text-4xl font-bold text-center my-16">Thank You</h1>
        </div>
    );
};

export default PaymentSuccess;