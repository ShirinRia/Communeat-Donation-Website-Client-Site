import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiossecure from "../../../Hooks/useAxiossecure";
import Foodrequest from "./foodrequest";
import Norequest from "./Norequest";
import { Helmet } from "react-helmet-async";


const Myfoodrequest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiossecure()
    const [myrequestedfoods, setmyrequestedfoods] = useState([])
    const [isproductavailable, setisproductavailable] = useState(true)
    const url = `/requestedfood?email=${user?.email}`;
    useEffect(() => {

        axiosSecure.get(url)
            .then(res => {
                setmyrequestedfoods(res.data)
            })
            if (!myrequestedfoods.length) {
                setisproductavailable(false)
                // console.log('no')
            }
            else{
                setisproductavailable(true)
            }
    }, [axiosSecure, myrequestedfoods.length, url])
   
    console.log(myrequestedfoods)
    return (
        <div>
            <Helmet>
                <title>Communeat | Your Food Request</title>
            </Helmet>
{
            isproductavailable?<div className = "max-w-7xl mx-auto my-16 ">
            {
                myrequestedfoods.map(myrequestedfood => <Foodrequest
                    key={myrequestedfood._id}
                    myrequestedfood={myrequestedfood}
                    myrequestedfoods={myrequestedfoods}
                    setmyrequestedfoods={setmyrequestedfoods}>

                </Foodrequest>)
            }
        </div >
                : <Norequest></Norequest>
        }
        </div>
        
        
    );
};

export default Myfoodrequest;