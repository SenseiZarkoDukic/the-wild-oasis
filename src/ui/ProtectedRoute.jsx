import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { user, isLoading } = useUser();

  // 2. While loading, show spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner size="large" />
      </FullPage>
    );
  }

  // 3. If user is not authenticated, redirect to login

  // 4. If there IS a user, render the app

  return children;
}

export default ProtectedRoute;
