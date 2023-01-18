import UseSWR from "swr";

const baseUrl = "http://localhost:3000/api";
const callback = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, isLoading, error } = UseSWR(`${baseUrl}/${endpoint}`, callback);

  return {
    data,
    isError: error,
    isLoading,
    endpoint: `${baseUrl}/${endpoint}`,
  };
}
