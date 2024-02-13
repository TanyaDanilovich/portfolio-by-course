import styled from "styled-components";
import { Section } from "../../components/styled/Section";
import { SectionTitle } from "../../components/styled/SectionTitle";
import React from "react";
import { SectionText } from "../../components/styled/SectionText";
import { worksData } from "./worksData";
import { Work } from "./Work";
import { Container } from "../../components/styled/Container";

export const Works = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>My works</SectionTitle>
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
      </Container>
    </Section>
  );
};

type WorkContentProps = {
  // height?: string
  // width?: string
};
const WorkContent = styled.div<WorkContentProps>``;
