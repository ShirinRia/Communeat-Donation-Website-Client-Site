import error from "../../../error.json"
import Lottie from "lottie-react";
const Errorpage = () => {
    return (
        <div >
            <Lottie className="h-[100vh]"  animationData={error} loop={true} />
        </div>
    );
};

export default Errorpage;