// import { useReactTable } from '@tanstack/react-table'
import { useEffect, useState } from 'react';
import useAxiossecure from "../../../Hooks/useAxiossecure";
import useAuth from '../../../Hooks/useAuth';
import Myfoodtable from './Myfoodtable';
const Managefood = () => {
    // const table = useReactTable(options)

    const { user } = useAuth()
    console.log(user)
    const [Myfood, setmyfood] = useState([]);
    const axiosSecure = useAxiossecure()
    // const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const url = `/userfood?email=${user?.email}`;
    useEffect(() => {

        axiosSecure.get(url)
            .then(res => {
                setmyfood(res.data)
            })


    }, [axiosSecure, url])
    console.log(Myfood)
    return (
        <div>
            {Myfood.map(myfood => <Myfoodtable key={myfood._id} myfood={myfood}></Myfoodtable>)}
        </div>
    );
};

export default Managefood;