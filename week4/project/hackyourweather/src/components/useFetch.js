import { useState, useEffect } from "react";

const useFetch = url => {
  //check for errors
  const [hasError, setError] = useState({ show: false });
  //check for loading
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const errorTimer = setTimeout(() => {
      setError({ show: false });
    }, 3000);
    return () => {
      clearTimeout(errorTimer);
    };
  }, [hasError]);

  //if there is an error, display error message for 3sec
  const handleError = ({ errorMessage }) => {
    setError({ show: true, errorMessage });
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      //if fetch succesful, setting error to false will clear timeout
      setError({ show: false });
      const response = await fetch(url);
      if (!response.ok) {
        handleError({
          errorMessage: `${response.status}. ${response.statusText}`,
        });
        return;
      }
      const fetchData = await response.json();
      return fetchData;
    } catch (err) {
      handleError({
        errorMessage: "Ooops, something went wrong! Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return { hasError, isLoading, fetchData };
};

export default useFetch;
