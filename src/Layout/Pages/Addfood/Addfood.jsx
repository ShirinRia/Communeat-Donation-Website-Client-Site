

const Addfood = () => {
    const handleaddproduct = e => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.pro_name.value;
        const BrandName = form.brandName.value;
        const product_type = form.pro_type.value;
        const product_price = form.price.value;
        const product_rating = form.rating.value;
        const product_description = form.description.value;
        const product_photo = form.photo.value;
        const product_amount = form.amount.value;
        const newProduct = { product_name, BrandName, product_type, product_price, product_rating, product_description, product_photo, product_amount }
        console.log(newProduct);
        fetch('https://cosmetics-beauty-backend-mimjpskj0-shirin-sultanas-projects.vercel.app/products',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newProduct)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset()
                }
            })

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
                                <select className="select select-bordered w-full rounded-md focus:ring  border-gray-700 text-gray-900" name="brandName" defaultValue="Available" required>
                                    <option disabled selected>Food Status</option>
                                    <option value="Available">Available</option>

                                </select>
                            </div>


                            <div className="col-span-full sm:col-span-3">

                                <input name="expiredate" placeholder="Date"
                                    type="text"
                                    onFocus="(this.type='date')"
                                    onBlur="(this.type='text')"
                                    className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">

                                <input name="image" type="URL" placeholder="Food Image" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900" />
                            </div>

                            <div className="col-span-full">

                                <textarea name="note" placeholder="Additional Notes" className="w-full rounded-md focus:ring  border-gray-700 text-gray-900"></textarea>
                            </div>
                            <input type="submit" value="Add Food" className="w-full col-span-full btn text-white text-xl px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100" />
                        </div>
                        
                    </fieldset>
                   
                </form>
            </section>
       
    );
};

export default Addfood;