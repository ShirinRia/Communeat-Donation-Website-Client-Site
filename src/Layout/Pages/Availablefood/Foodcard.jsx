import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6
const Foodcard = ({ foodcard }) => {
    const { _id,address, image, foodname, quantity, expiredate, note } = foodcard
    return (
       
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                        <span className="text-xs text-gray-400">{address}</span>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{foodname}</h2>
                    <p className="text-sm text-gray-400">{note}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">

                        <p>{expiredate}</p>
                    </div>
                    <div className="flex space-x-2 text-sm text-gray-400">

                        <Link to={`/singlefood/${_id}`} className="flex items-center p-1 space-x-1.5">
                            <BiRightArrowCircle className='text-3xl'/>
                        </Link>
                    </div>
                </div>
            </div>
        
    );
};
Foodcard.propTypes = {
    foodcard: PropTypes.object,
};
export default Foodcard;