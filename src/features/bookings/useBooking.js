import { useQuery } from "@tanstack/react-query";

import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const {
    isLoading,
    data: booking,
    bookingId,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
  });

  return { isLoading, booking, bookingId, error };
}
