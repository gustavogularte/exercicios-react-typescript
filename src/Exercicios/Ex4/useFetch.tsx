import React from 'react';

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const controller = new AbortController();
  const { signal } = controller;

  function resetLoadingAndError() {
    setLoading(false);
    setError(null);
  }

  async function fetchData() {
    resetLoadingAndError();

    try {
      const response = await fetch(url, {
        ...options,
        signal,
      });
      if (!response.ok) throw new Error('Error: ' + response.status);

      const json = await response.json();
      if (!signal.aborted) setData(json as T);

    } catch (error) {
      if (!signal.aborted && error instanceof Error) setError(error.message);

    } finally {
      if (!signal.aborted) setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
