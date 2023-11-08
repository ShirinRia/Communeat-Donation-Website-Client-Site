import { useState } from "react";
import useAxiossecure from "../../../Hooks/useAxiossecure";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'; // ES6
const Managefoodcaed = ({ request }) => {
    const { _id, expiredate, requestdate, requesttime, status, Requester_name
        , Requester_email, Requester_image, note, foodname, foodid } = request
    const axiosSecure = useAxiossecure()
    const [newstatus, setnewstatus] = useState("Pending")
    const handleStatus = () => {
        setnewstatus("Delivered")
        const url = `/requestedfood`;
        const olduser = {
            _id,
            newstatus: "Delivered"
        }
        axiosSecure.put(url, olduser)
            .then(response => {
                console.log(response);
                if (response.data.modifiedCount > 0) {
                    const del_url = `/food/${foodid}`
                    axiosSecure.delete(del_url)
                        .then(res => {
                            console.log(res.data.deletedCount)
                            if (res.data.deletedCount > 0) {

                                Swal.fire({
                                    title: 'Congratulations',
                                    text: 'Thanks for your donation',
                                    icon: 'success',
                                    confirmButtonText: 'Welcome'
                                })
                            }
                        })

                }
            })
            .catch((error) => {

                const errorMessage = error.message;

                // if (errorMessage === "Firebase: Error (auth/invalid-login-credentials).")

                // 	Swal.fire({
                // 		title: "Invalid Credential",
                // 		showClass: {
                // 			popup: 'animate__animated animate__fadeInDown'
                // 		},
                // 		hideClass: {
                // 			popup: 'animate__animated animate__fadeOutUp'
                // 		}
                // 	})
            });

    }
    return (
        <div className="py-16">
            <div className=" text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">
                    <div className="flex items-center justify-between">
                        <div className="flex text-sm divide-x">
                            <div className="flex items-center px-2 py-1 pl-0 space-x-1">

                                <p>Expire Date: </p>  <span>{requestdate}</span>
                            </div>
                            <div className="flex items-center px-2 py-1 space-x-1">

                                <p>Requested Time: </p> <span>{requesttime}</span>
                            </div>
                        </div>
                        <button onClick={handleStatus} className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900">{newstatus}</button>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold hover:underline">{foodname}</p>
                        <p className="mt-2">{note}</p>
                    </div>
                    <div className="flex items-center justify-end mt-4">

                        <div>
                            <div className="flex items-center gap-5">
                                <img src={Requester_image} className="h-14 w-14 rounded-full" />

                                <span className="hover:underline text-gray-400 text-xl">{Requester_name}</span>

                            </div>
                            <span className="hover:underline text-gray-400 text-xl">{Requester_email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Managefoodcaed.propTypes = {
    request:PropTypes.object,
};
export default Managefoodcaed;