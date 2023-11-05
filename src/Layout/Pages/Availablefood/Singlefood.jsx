import { useLoaderData } from "react-router-dom";


const Singlefood = () => {
    const food = useLoaderData()
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group bg-gray-900">
                        <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl">Noster tincidunt reprimique ad pro</h3>
                            <span className="text-xs text-gray-400">February 19, 2021</span>
                            <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default Singlefood;