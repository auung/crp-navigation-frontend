import { useState, useCallback, useEffect } from 'react';

const useFetch = () => {
	const [url, setUrl] = useState();
	const [options, setOptions] = useState({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    fetch(url, options)
      .then(response => {
				console.log("fetched to " + url);
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

  // eslint-disable-next-line
  }, [url])

	useEffect(() => {
		if (url) {
			fetchData();
		}

	// eslint-disable-next-line
	}, [url])

	return { data, loading, error, setUrl, setOptions };
};

export default useFetch;
