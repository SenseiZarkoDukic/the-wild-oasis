import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If user is not authenticated, redirect to login

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isLoading]);

  // 3. While loading, show spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner size="large" />
      </FullPage>
    );
  }

  // 4. If there IS a user, render the app
  if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
