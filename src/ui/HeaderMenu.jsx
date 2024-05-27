import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
