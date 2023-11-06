import PropTypes from 'prop-types'; // ES6
import Table from './Table';

const Myfoodtable = ({ myfood }) => {

    return (
        <div>
            <Table ></Table>
        </div>
    );
};
Myfoodtable.propTypes = {
    myfood: PropTypes.object,
};
export default Myfoodtable;