import styled from "styled-components";
import { StyledSection } from "../../components/styled/StyledSection";
import { SectionMainTitle } from "../../components/styled/SectionMainTitle";
import React from "react";
import { SectionText } from "../../components/styled/SectionText";
import { worksData } from "./worksData";
import { Work } from "./Work";

export const Works = () => {
  return (
    <StyledSection>
      <SectionMainTitle>My works</SectionMainTitle>
      <SectionText>
        Check out my recent and popular design & branding projects I have worked
        on.
      </SectionText>
      <div>
        {worksData.map((work) => (
          <Work
            id={work.id}
            title={work.title}
            text={work.text}
            imageUrl={work.imageUrl}
          />
        ))}
      </div>
    </StyledSection>
  );
};

type StyledWorksTitleProps = {
  // height?: string
  // width?: string
};
const StyledWorksTitle = styled.h1<StyledWorksTitleProps>``;
