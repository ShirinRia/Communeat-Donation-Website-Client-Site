import { useLoaderData } from "react-router-dom";
import Managefoodcaed from "./Managefoodcaed";


const Manage = () => {
    const allrequest=useLoaderData()
    
    return (
        <div className="my-16 ">
         {  allrequest.map(request=><Managefoodcaed key={request._id}
         request={request}>

         </Managefoodcaed>)}
        </div>
    );
};

export default Manage;