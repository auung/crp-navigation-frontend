import { useState, useCallback, useEffect } from 'react';

const useFetch = () => {
	const [fetchParams, setFetchParams] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    fetch(...fetchParams)
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

  // eslint-disable-next-line
  }, [fetchParams])

	useEffect(() => {
		if (fetchParams) {
			fetchData();
		}

	// eslint-disable-next-line
	}, [fetchParams])

	return { data, loading, error, setFetchParams };
};

export default useFetch;
