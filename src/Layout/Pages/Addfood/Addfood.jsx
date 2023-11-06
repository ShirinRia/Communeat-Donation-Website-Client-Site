
import useAuth from "../../../Hooks/useAuth";
import useAxiossecure from "../../../Hooks/useAxiossecure";
// import axios from 'axios';
import Swal from 'sweetalert2'
const Addfood = () => {

    const axiosSecure = useAxiossecure()

    const { user } = useAuth()
    console.log(user)
    const handleaddproduct = e => {
        e.preventDefault();
        const form = e.target;
        const foodname = form.foodname.value;
        const quantity = form.quantity.value;
        const address = form.address.value;
        const status = form.status.value;
        const expiredate = form.expiredate.value;
        const note = form.note.value;
        const image = form.image.value;
        const donar_name = user.displayName
        const donar_email = user.email
        const donar_image = user.photoURL
        const newfood = { foodname, quantity, address, status, expiredate, note, image, donar_name, donar_email, donar_image }
        console.log(newfood);


        // fetch('http://localhost:5000/newfood',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //         body: JSON.stringify(newfood)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         // if (data.insertedId) {
        //         //     Swal.fire({
        //         //         title: 'Success!',
        //         //         text: 'Product Added Successfully',
        //         //         icon: 'success',
        //         //         confirmButtonText: 'OK'
        //         //     })
        //         //     form.reset()
        //         // }
        //     })

        const url = `/newfood`;
        axiosSecure.post(url, newfood)
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
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });

    }
    return (

        <section className="p-6  text-gray-50 max-w-7xl mx-auto">
            <form onSubmit={handleaddproduct} className="container  mx-auto space-y-12">
                <fieldset className="  p-6 rounded-md shadow-sm bg-gray-900 justify-center">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 m-6 space-y-3">
                        <div className="col-span-full sm:col-span-3">

                            <input name="foodname" type="text" placeholder="Food name" className="w-full rounded-md focus:ring border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-3">

                            <input name="quantity" type="number" placeholder="Food Quantity" className="w-full rounded-md focus:ring   border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">

                            <input name="address" type="text" placeholder="Pickup Location" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">

                            {/* <input name="quantity" type="number" placeholder="Food Quantity" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                                 */}
                            <select className="select select-bordered w-full rounded-md focus:ring  border-gray-700 text-gray-900" name="status" defaultValue="Available" required>
                                <option disabled selected>Food Status</option>
                                <option value="Available">Available</option>

                            </select>
                        </div>


                        <div className="col-span-full sm:col-span-3">

                            <input name="expiredate" placeholder="Date"
                                type="date"
                                // onFocus="(this.type='date')"
                                // onBlur="(this.type='text')"
                                className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">

                            <input name="image" type="url" placeholder="Food Image" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full">

                            <textarea name="note" placeholder="Additional Notes" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900"></textarea>
                        </div>
                        <input type="submit" value="Add Food" className="w-full col-span-full  text-white text-xl px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100" />
                    </div>

                </fieldset>

            </form>
        </section>

    );
};

export default Addfood;