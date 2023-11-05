import { useContext } from 'react';
import { Authcontext} from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(Authcontext)
    const location=useLocation()
    console.log(loading)
    if(loading){
        return <span className="loading loading-spinner loading-lg h-[68vh]"></span>
    }
    else{
    if(user){
        return children
    }
    else{
        return (
            <Navigate state={location.pathname} to={'/login'}></Navigate>
            );
    }
}
   
    
};
PrivateRoute.propTypes = {
    children:PropTypes.node,
};
export default PrivateRoute;