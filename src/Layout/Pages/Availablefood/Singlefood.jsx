import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Singlefood = () => {
    const food = useLoaderData()
    const { user } = useAuth()
    const handlerequest = e => {


    }
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group bg-gray-900">
                        <img src={food.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl">{food.foodname}</h3>
                            <span className="text-xs text-gray-400 ">{food.expiredate}</span>
                            <p className="mb-16">{food.quantity}</p>
                            {/* <button className="px-8 py-3 font-semibold border rounded text-2xl border-gray-100 text-gray-100" htmlFor="my_modal_7">Request</button> */}
                           <label htmlFor="my_modal_7" className="px-5 py-1 font-semibold border rounded text-2xl border-gray-100  text-gray-100">Request</label>
                            
                        </div>
                    </div>

                </div>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal">
                    <div className="max-w-4xl mx-auto modal-box bg-transparent">

                        <form onSubmit={handlerequest} className="container  mx-auto space-y-5 relative">
                           
                            <fieldset className="  p-6 rounded-md shadow-sm bg-gray-900 justify-center">

                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mx-6  space-y-3">
                                    <div className="sm:col-span-4">

                                        <input name="foodid" type="text" placeholder="Food Id" className="w-full rounded-md focus:ring border-gray-700 text-gray-900" defaultValue={food._id} disabled />
                                    </div>
                                    <div className="col-span-full sm:col-span-2 ">
                                        <input name="foodname" type="text" placeholder="Food name" className="w-full rounded-md focus:ring border-gray-700 text-gray-900" defaultValue={food.foodname} disabled />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">

                                        <input name="address" type="text" defaultValue={food.address} className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" disabled />
                                    </div>

                                    <div className="col-span-full sm:col-span-3">

                                        <input name="uemail" type="email" className="w-full rounded-md focus:ring   border-gray-700 text-gray-900" defaultValue={user.email} disabled />
                                    </div>

                                    <div className="col-span-full sm:col-span-3">

                                        <input name="dname" type="text" className="w-full rounded-md focus:ring   border-gray-700 text-gray-900" defaultValue={food.donar_name} disabled />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">

                                        <input name="demail" type="email" className="w-full rounded-md focus:ring   border-gray-700 text-gray-900" defaultValue={food.donar_email} disabled />
                                    </div>

                                    <div className="col-span-full sm:col-span-2">

                                        <input name="expiredate" placeholder="Date"
                                            type="date"

                                            className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" defaultValue={food.expiredate} disabled />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">

                                        <input name="requestdate" placeholder="Date"
                                            type="date"

                                            className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" disabled />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">

                                        <input name="requestdate" placeholder="Donation money"
                                            type="number"

                                            className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-full">

                                        <input name="image" type="text" placeholder="Food Image" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" defaultValue={food.image} />
                                    </div>

                                    <div className="col-span-full">

                                        <textarea name="note" placeholder="Additional Notes" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" defaultValue={food.note}></textarea>
                                    </div>
                                    <input type="submit" value="Request" className="w-full col-span-full  text-white text-xl px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100" />
                                </div>

                            </fieldset>

                        </form>
                    </div>

                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
                {/* <dialog id="my_modal_3" className="modal">

                   
                    {/* if there is a button in form, it will close the modal */}

                {/* </dialog> */}
            </section>
        </div>
    );
};

export default Singlefood;