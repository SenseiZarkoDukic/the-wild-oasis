import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : // { field: "status", value: filterValue};
        { field: "status", value: 5000, method: "gte" };
  const sortBy = searchParams.get("sortBy");
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings(filter, sortBy),
  });

  return { isLoading, bookings, error };
}
