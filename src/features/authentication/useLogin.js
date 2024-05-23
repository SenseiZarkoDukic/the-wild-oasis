import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient(); // 1. Import the useQueryClient hook
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Invalidate the user query to refetch the user data
      queryClient.setQueriesData(["user"], user);
      // Redirect to the dashboard
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      // Show an error message
      console.error("ERROR:", error);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isPending };
}
