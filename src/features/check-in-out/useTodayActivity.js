import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });
}
