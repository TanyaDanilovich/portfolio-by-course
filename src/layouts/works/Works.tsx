import styled from "styled-components";
import { SectionTitle } from "../../components/styled/SectionTitle";
import React from "react";
import { SectionText } from "../../components/styled/SectionText";
import { worksData } from "./worksData";
import { Work } from "./Work";
import { Container } from "../../components/styled/Container";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { theme } from "../../styles/Theme.styled";

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <SectionText>
          Check out my recent and popular design & branding projects I have
          worked on.
        </SectionText>
        <FlexWrapper>
          {worksData.map((work) => (
            <Work
              key={work.id}
              id={work.id}
              title={work.title}
              text={work.text}
              imageUrl={work.imageUrl}
            />
          ))}
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

type StyledWorksProps = {};
const StyledWorks = styled.section<StyledWorksProps>`
  background-color: ${theme.colors.lightBg};
  padding: 100px 0;
`;
