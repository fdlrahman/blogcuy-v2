import useSWR from "swr";

const baseUrl = "http://localhost:3000/api";
const callback = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, isLoading, error } = useSWR(`${baseUrl}/${endpoint}`, callback);

  return {
    data,
    isError: error,
    isLoading,
    endpoint: `${baseUrl}/${endpoint}`,
  };
}
