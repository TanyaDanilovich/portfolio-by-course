import styled from "styled-components";

type props = {};
export const Menu = ({}: props) => {
  return (
    <StyledMenu>
      <StyledMenuList>
        <StyledMenuItem>
          <a>My skills</a>
        </StyledMenuItem>

        <StyledMenuItem>
          <a>Works</a>
        </StyledMenuItem>

        <StyledMenuItem>
          <a>Testimonials</a>
        </StyledMenuItem>

        <StyledMenuItem>
          <a>Contact</a>
        </StyledMenuItem>
      </StyledMenuList>
    </StyledMenu>
  );
};

type StyledMenuProps = {};
export const StyledMenu = styled.nav<StyledMenuProps>``;

type StyledMenuListProps = {};
const StyledMenuList = styled.ul<StyledMenuListProps>`
  display: flex;
  gap: 20px;
`;

type StyledMenuItemProps = {};
const StyledMenuItem = styled.li<StyledMenuItemProps>`
  list-style: none;
  cursor: pointer;
`;
