
import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: AxiosError | null;
}

const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

function useFetch<T>(url: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<T> = await api.get(url);
                setData(response.data);
            } catch (err: unknown) {
                if (axios.isAxiosError(err))
                    setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
