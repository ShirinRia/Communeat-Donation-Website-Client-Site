import error from '../../../../public/test.json'
import Lottie from "lottie-react";
const Errorpage = () => {
    return (
        <div>
            <Lottie animationData={error} loop={true} />
        </div>
    );
};

export default Errorpage;