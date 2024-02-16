// import styled from "styled-components";
// import logo from "../assets/png/logo-default-228x67.png";
//
// type props = {
//   height?: string;
// };
// export const Logo = ({}: props) => {
//   return <StyledLogo src={logo} height={"2rem"} />;
// };
//
// type StyledLogoProps = {};
// const StyledLogo = styled.img<StyledLogoProps>`
//   height: 100%;
//   max-height: ${(props) => props.height || "100%"};
// `;

import styled from "styled-components";
import logo from "../assets/png/logo-default-228x67.png";

type props = {
  height?: string;
};
export const Logo = ({}: props) => {
  return <StyledLogo>Portfolio</StyledLogo>;
};

type StyledLogoProps = {};
const StyledLogo = styled.span<StyledLogoProps>`
  font-size: 2rem;
`;
