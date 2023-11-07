
import { Link } from 'react-router-dom';

const Norequest = () => {
    return (
        <div>
             <div className="h-[70vh] md:h-[80vh] flex flex-col justify-center items-center space-y-11 mx-5 md:mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <h1 className="text-8xl md:text-9xl text-red-600">OPPS!</h1>
                <p className="text-3xl">You Have not requested for any food yet</p>
            </div>
            
            <Link to={'/'} className="p-5 bg-red-600 text-white">Back to Home</Link>
        </div>
        </div>
    );
};

export default Norequest;