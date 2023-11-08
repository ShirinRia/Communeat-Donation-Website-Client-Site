
import { useLoaderData } from 'react-router-dom';
import './print.css';
import Receiptcard from './Receiptcard';
import useAxiossecure from '../../../Hooks/useAxiossecure';
import { useEffect, useState } from 'react';
const Receipt = () => {
  const axiossecure=useAxiossecure()
  const url=`/receipt`
  const [donations,setdonatios]=useState([])
  
  useEffect(()=>{
    axiossecure.get(url)
    .then(res => {
      setdonatios(res.data)
  })
  },[axiossecure, url])
    // const donations=useLoaderData()
    console.log(donations)
   
    return (
        <div>
          {
            donations.map(donation =><Receiptcard key={donation._id} donation={donation}></Receiptcard>)
          }
            {/* <th> <button className="hide-on-print" onClick={printReceipt}>Print</button></th> */}

        </div>
    );
};

export default Receipt;
