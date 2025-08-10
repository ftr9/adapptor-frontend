import { useEffect, useState, useRef } from "react";
import { AxiosError } from "axios";
import { BASE_API } from "@/services/api";

export const useFetch = <T>(url: string) => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T>();
  const abortController = useRef(new AbortController());

  useEffect(() => {
    const performApiAction = async () => {
      try {
        const response = await BASE_API.get(url, {
          signal: abortController.current.signal,
        });
        setData(response.data?.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.response?.data.message);
          return;
        }
        setError("something went wrong.");
      } finally {
        setIsFetching(false);
      }
    };

    performApiAction();

    return () => {
      abortController.current.abort();
    };
  }, [url]);

  return { isFetching, data, error };
};
