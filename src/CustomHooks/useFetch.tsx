import React, {useState} from 'react';

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState<T | false>(false);
    const [error, setError] = useState<T | null>(null);


    return {data, loading, error}
}

export default useFetch;