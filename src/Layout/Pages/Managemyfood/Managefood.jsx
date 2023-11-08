import { Helmet } from "react-helmet-async";
import Table from "./Table";

const Managefood = () => {
 

    return (
        <div className="max-w-7xl mx-auto my-16">
            <Helmet>
                <title>
                    Communeat | Manageyourfood 
                </title>
            </Helmet>
            {/* {Myfood.map(myfood => <Myfoodtable key={myfood._id} myfood={myfood}></Myfoodtable>)} */}
           
           
            <Table></Table>
        </div>
    );
};

export default Managefood;