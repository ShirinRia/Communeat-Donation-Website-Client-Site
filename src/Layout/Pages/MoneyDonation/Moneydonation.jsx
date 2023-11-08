import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useAxiossecure from "../../../Hooks/useAxiossecure";
import './print.css'
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Moneydonation = () => {

    const { user } = useAuth()
    const navigate = useNavigate()
   
    const axiosSecure = useAxiossecure()

    const handledonation = e => {
        e.preventDefault();
        const form = e.target;

        const donated_money = form.money.value;

        const note = form.note.value;
        const donar_name = user.displayName
        const donar_email = user.email
        const donar_image = user.photoURL
        const donatedmoney = { donated_money, note, donar_name, donar_email, donar_image }
        console.log(donatedmoney);

        const url = `/moneydonation`;
        axiosSecure.post(url, donatedmoney)
            .then(function (response) {
                console.log(response);
                if (response.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Thanks for your donation',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset()
                }
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    title: 'Something Went Wrong!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });

    }
    const printReceipt = () => {
       navigate('/receipt')
    }
    return (
        <section className="p-6  text-gray-50 max-w-4xl mx-auto">
            <Helmet>
                <title>Communeat | Donate Some Money</title>
            </Helmet>
            <form onSubmit={handledonation} className="container  mx-auto space-y-12">
                <fieldset className="  p-6 rounded-md shadow-sm bg-gray-900 justify-center">

                    <div className="grid grid-cols-1 m-6 space-y-3">
                        <div className="">

                            <input name="donar_name" type="text" placeholder="Donar name" className="on-print w-full rounded-md focus:ring border-gray-700 text-gray-900" />
                        </div>

                        <div className="">

                            <input name="money" type="number" placeholder="Amount" className="on-print w-full rounded-md focus:ring   border-gray-700 text-gray-900" />
                        </div>

                        <div className="">

                            <textarea name="note" placeholder="Additional Notes" className="on-print w-full rounded-md focus:ring  border-gray-700 text-gray-900"></textarea>
                        </div>
                        <motion.button 

                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                        >
                            <input type="submit" value="Donate" className="hide-on-print w-full col-span-full  text-white text-xl px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100" />
                        </motion.button>
                       
                    </div>

                </fieldset>

            </form>
        </section>
    );
};

export default Moneydonation;