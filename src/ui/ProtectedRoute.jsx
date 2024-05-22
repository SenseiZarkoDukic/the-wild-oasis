import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user

  // 2. While loading, show spinner

  // 3. If user is not authenticated, redirect to login

  // 4. If there IS a user, render the app

  return children;
}

export default ProtectedRoute;
