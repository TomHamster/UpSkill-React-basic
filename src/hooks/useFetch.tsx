import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url?: string, update = '') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!url) {
      return;
    }

    axios
      .get(url)
      .then((response: AxiosResponse) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error: AxiosError) => {
        setLoading(false);
        setError(error.message);
      });
  }, [update]);

  return { data, loading, error };
};
