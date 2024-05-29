import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useUser();
  console.log(user);
  const { fullName, avatar } = user.user_metadata;

  console.log(fullName, avatar);

  return (
    <StyledUserAvatar>
      <Avatar
        // src="https://randomuser.me/api/port...0&noinfo"
        alt="User avatar"
      />
      <span>John Doe</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
