import { useSearchParams } from "react-router-dom";

export function useRecentBookings() {
  const [searchParams, setSearchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
}
