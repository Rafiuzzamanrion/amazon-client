import img from '/google.png'
import img2 from '/fb.png'

const SocialLogin = () => {
    return (
        <div>
         <div className='mt-1 flex gap-4'>
            
            <button className="bg-transparent hover:scale-125 hover:ease-in hover:duration-150"><img className='w-9 h-9 object-cover' src={img} alt="" /></button>
            <button className="bg-transparent hover:scale-125 hover:ease-in hover:duration-150"><img className='w-9 h-9 object-cover' src={img2} alt="" /></button>
         </div>   
        </div>
    );
};

export default SocialLogin;