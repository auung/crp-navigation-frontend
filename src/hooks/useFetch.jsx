import { useState, useCallback, useEffect } from 'react';

const useFetch = (url, fetchNow = true) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback((options = {}) => {
		setData(null);
    setLoading(true);
    setError(null);

    fetch(url, options)
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
			})
			.catch(err => {
				if (err.name === "AbortError") {
					console.log("fetch aborted");
				} else {
					setLoading(false);
					setError(err.message);
				}
			})

  }, [url])

	useEffect(() => {
		if (fetchNow) {
			fetchData();
		}

		return () => {
			setData(null);
			setLoading(false);
			setError(null);
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, loading, error, fetchData };
};

export default useFetch;
