import useAuth from "../../../../Hooks/useAuth";
import Swal from 'sweetalert2'
import useAxiossecure from "../../../../Hooks/useAxiossecure";

const Exreasection1 = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiossecure()
    const handleaddreview = e => {
        e.preventDefault();
        const form = e.target;
       
        const comment = form.comment.value;
        const reviewer_name = user.displayName
        const reviewer_email = user.email
        const reviewer_image = user.photoURL
        const newreview = {  comment, reviewer_name, reviewer_email, reviewer_image }
        console.log(newreview);

        const url = `/newreview`;
        axiosSecure.post(url, newreview)
            .then(function (response) {
                console.log(response);
                if (response.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Thanks for your Comment',
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
        <div className="my-16">
            
            <form onSubmit={handleaddreview} className="container bg-gray-900  mx-auto  ">
            <h2 className="text-gray-100 text-3xl md:text-5xl pt-6 pl-6">Leave a Feedback</h2>
            <fieldset className="  p-6  rounded-md shadow-sm justify-center">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 m-6 space-y-3">

                        <div className="col-span-full">

                            <textarea name="comment" placeholder="Write Your Feedback" className="w-full h-48 rounded-md focus:ring  border-gray-700 text-gray-900"></textarea>
                        </div>
                        {/* <div className="flex col-span-full gap-5">
                            <div className="w-1/2">

                                <input name="name" type="text" placeholder="Your name"  className="w-full rounded-md focus:ring border-gray-700 text-gray-900" disabled />
                            </div>

                            <div className="w-1/2">

                                <input name="email" type="text"  placeholder="Your Email" className="w-full rounded-md focus:ring border-gray-700 text-gray-900" disabled/>
                            </div>
                        </div> */}
                        <input type="submit" value="Post Feedback"  className="w-full col-span-full  text-white text-xl px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100" />
                    </div>

                </fieldset>

            </form>
        </div>
    );
};

export default Exreasection1;