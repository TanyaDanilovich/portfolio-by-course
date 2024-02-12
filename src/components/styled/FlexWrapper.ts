import styled from "styled-components";

type StyledFlexWrapperProps = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  grow?:string
};
export const FlexWrapper = styled.div<StyledFlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-grow: ${(props) => props.grow || "0"};
  gap: ${(props) => props.gap || "0"};
`;
