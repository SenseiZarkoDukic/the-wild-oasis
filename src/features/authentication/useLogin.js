import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Redirect to the dashboard
      navigate("/dashboard");
    },
    onError: (error) => {
      // Show an error message
      console.error("ERROR:", error);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isPending };
}
