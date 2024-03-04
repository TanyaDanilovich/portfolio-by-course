import styled from "styled-components";
import arrowLeft from "../../../assets/svg/arrow/arrow-left.svg";
import arrowRight from "../../../assets/svg/arrow/arrow-right.svg";
import { IconName } from "../SwipeGallery.type";

export type SwipeIconProps = {
  name: IconName;
};
export const SwipeIcon = ({ name }: SwipeIconProps) => {
  return <StyledSwipeIcon $name={name}></StyledSwipeIcon>;
};

const StyledSwipeIcon = styled.span<{ $name: IconName }>`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) =>
      props.$name === "right" ? arrowRight : arrowLeft});
`;
