import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        // fetch(url)
        fetch(url,{ signal : abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource!!');
                }
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                //console.log(err.message);
                if(err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        return () => abortCont.abort()
    },[url]);  

    return {data, isPending, error};
}

export default useFetch;