import { Section } from "../../components/styled/Section";
import { SectionTitle } from "../../components/styled/SectionTitle";
import { skillsData } from "./skillsData";
import { Skill } from "./Skill";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Container } from "../../components/styled/Container";
import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

export const Skills = () => {
  return (
    <Section>
      <StyledSkills>
        <Container>
          <SectionTitle>My Skills</SectionTitle>
          <FlexWrapper wrap={'wrap'}>
            {skillsData.map((skill) => (
              <Skill
                id={skill.id}
                key={skill.id}
                title={skill.title}
                text={skill.text}
                icon={skill.icon}
              />
            ))}
          </FlexWrapper>
        </Container>
      </StyledSkills>
    </Section>
  );
};

type StyledSkillsProps = {};
const StyledSkills = styled.div<StyledSkillsProps>`
  div:first-of-type {
    padding: 0;
  }

  h2 {
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  h2:before {
    display: none;
  }

  background-color: ${theme.colors.dark};
  width: 100%;
`;
