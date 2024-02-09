import styled from "styled-components";
import { StyledSection } from "../../components/styled/StyledSection";
import { SectionMainTitle } from "../../components/styled/SectionMainTitle";
import React from "react";
import { SectionText } from "../../components/styled/SectionText";
import { worksData } from "./worksData";
import { Work } from "./Work";
import { SectionWrapper } from "../../components/styled/SectionWrapper";

export const Works = () => {
  return (
    <StyledSection>
      <SectionWrapper>
        <SectionMainTitle>My works</SectionMainTitle>
        <SectionText>
          Check out my recent and popular design & branding projects I have
          worked on.
        </SectionText>
        <WorkContent>
          {worksData.map((work) => (
            <Work
              id={work.id}
              title={work.title}
              text={work.text}
              imageUrl={work.imageUrl}
            />
          ))}
        </WorkContent>
      </SectionWrapper>
    </StyledSection>
  );
};

type WorkContentProps = {
  // height?: string
  // width?: string
};
const WorkContent = styled.div<WorkContentProps>``;
