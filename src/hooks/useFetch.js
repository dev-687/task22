import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        // const fetchData = async () => {
        //     setLoading(true);
        //     try {
        //         const response = await fetch(url);
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! Status: ${response.status}`);
        //         }
        //         const result = await response.json();
        //         setData(result);
        //     } catch (err) {
        //         setError(err.message);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchData();
        setLoading(true);
        fetch(url)
        .then((res)=>{
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((result)=>{
            setData(result);
            setError(null)
        })
        .catch((error)=>{
            setError(error.message);
            setData(null);
        })
        .finally(() => {
            setLoading(false);
        });


    }, [url]);

    return { data, loading, error };
}

export default useFetch;
