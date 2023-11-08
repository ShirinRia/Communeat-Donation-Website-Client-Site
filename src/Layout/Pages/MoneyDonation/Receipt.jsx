
import { useLoaderData } from 'react-router-dom';
import './print.css';
import Receiptcard from './Receiptcard';
const Receipt = () => {
    const donations=useLoaderData()
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
