import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiossecure from "../../../Hooks/useAxiossecure";
import Foodrequest from "./foodrequest";


const Myfoodrequest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiossecure()
    const [myrequestedfoods, setmyrequestedfoods] = useState([])
    const url = `/requestedfood?email=${user?.email}`;
    useEffect(() => {

        axiosSecure.get(url)
            .then(res => {
                setmyrequestedfoods(res.data)
            })
    }, [axiosSecure, url])
    console.log(myrequestedfoods)
    return (
        <div className="max-w-7xl mx-auto my-16">
            {myrequestedfoods.map(myrequestedfood => <Foodrequest
                key={myrequestedfood._id}
                myrequestedfood={myrequestedfood}>

            </Foodrequest>)}
        </div>
    );
};

export default Myfoodrequest;