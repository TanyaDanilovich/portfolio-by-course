import styled from "styled-components";
import { Section } from "../../components/styled/Section";
import { SectionSecondaryTitle } from "../../components/styled/SectionSecondaryTitle";
import { WorkType } from "./work.types.";
import { StyledImage } from "../../components/styled/StyledImage";

type props = WorkType;
export const Work = ({ id, text, title, imageUrl }: props) => {
  return (
    <StyledWork>
      <SectionSecondaryTitle>{title}</SectionSecondaryTitle>
      <StyledImage src={imageUrl} />
      <WorkText>{text}</WorkText>
      <div>
        <WorkLink>Demo</WorkLink>
        <WorkLink>Code</WorkLink>
      </div>
    </StyledWork>
  );
};

type StyledWorkProps = {};
const StyledWork = styled.article<StyledWorkProps>`
width:30%;
`;

type WorkTextProps = {};
const WorkText = styled.p<WorkTextProps>``;

type WorkLinkProps = {};
const WorkLink = styled.a<WorkLinkProps>`
  cursor: pointer`;
