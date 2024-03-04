import styled, {css} from "styled-components";
import { ReactNode } from "react";
import { IconName } from "../SwipeGallery.type";
import { SwipeIcon } from "../SwipeIcon/SwipeIcon";
import { myTheme } from "../../../styles/MyTheme.styled";

export type SwipeButtonProps = {
  name: IconName;
  children?: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
export const SwipeButton = ({
                              name,
                              children,
                              disabled,
                              onClick,
                            }: SwipeButtonProps) => {
  return (
      <StyledSwipeButton $name={name} onClick={onClick} disabled={disabled} $disabled={disabled}>
        <SwipeIcon name={name} />
        {children}
      </StyledSwipeButton>
  );
};

const StyledSwipeButton = styled.button<{
  $name: IconName;
  $disabled?: boolean;
}>`
  background-color: ${myTheme.colors.light};
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;

  &:hover {
    color: ${myTheme.colors.accent_1};
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
  }

  ${(props) =>
    props.$disabled &&
    css`
      background-color: ${myTheme.colors.grayMedium};
      opacity: 0.5;

      &:hover {
        color: ${myTheme.colors.grayMedium};
        background-color: ${myTheme.colors.grayMedium};
        box-shadow: none;
      }
    `}
`;






