import { useLoaderData, useParams } from "react-router-dom";
import Managefoodcaed from "./Managefoodcaed";
import { Helmet } from "react-helmet-async";


const Manage = () => {
    const allrequest=useLoaderData()
    const {name}=useParams()
    
    return (
        <div className="my-16 ">
            <Helmet>
                <title>Communeat | Request For Your Donated {name} </title>
            </Helmet>
         {  allrequest.map(request=><Managefoodcaed key={request._id}
         request={request}>

         </Managefoodcaed>)}
        </div>
    );
};

export default Manage;