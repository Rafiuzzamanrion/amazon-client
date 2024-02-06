import { VscError } from "react-icons/vsc";

const PaymentFailed = () => {
    return (
        <div className="min-h-screen mt-16">
            <div className="bg-base-100 shadow-xl p-8">
            <h1 className="gap-2 flex text-6xl font-bold text-error uppercase justify-center items-center"><span><VscError /></span> payment failed</h1>
            <h1 className="text-4xl font-bold text-center my-5">Please Try Again</h1>
            </div>
        </div>
    );
};

export default PaymentFailed;