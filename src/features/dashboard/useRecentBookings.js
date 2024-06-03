import { useSearchParams } from "react-router-dom";

export function useRecentBookings() {
  const [searchParams, setSearchParams] = useSearchParams();
}
