import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, method) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback((options) => {
    setLoading(true);
    setError(null);

    const abortCont = new AbortController();

    fetch(url, { method, ...options })
      .then(response => {
				if (!response.ok) {
					throw Error("Could not fetch data.");
				}
				return response.json();
			})
			.then(data => {
				setData(data);
				setLoading(false);
				setError(null);
				console.log("fetched");
			})
			.catch(err => {
				if (err.name === "AbortError") {
					console.log("fetch aborted");
				} else {
					setLoading(false);
					setError(err.message);
				}
			})
		return () => abortCont.abort();

  // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (method === 'GET') {
      fetchData();
    }
  }, [fetchData,method])

  return { data, loading, error, fetchData };
};

export default useFetch;
