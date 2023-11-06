import  { useEffect, useState } from 'react';

const useFood = () => {

    const [items, setitems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [])
    return items
};

export default useFood;