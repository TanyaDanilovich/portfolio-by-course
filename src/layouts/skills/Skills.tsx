import { SectionTitle } from "../../components/styled/SectionTitle";
import { skillsData } from "./skillsData";
import { Skill } from "./Skill";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Container } from "../../components/styled/Container";
import styled from "styled-components";
import { myTheme } from "../../styles/MyTheme.styled";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"}>
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
  );
};

type StyledSkillsProps = {};
const StyledSkills = styled.section<StyledSkillsProps>`
  
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

  background-color: ${myTheme.colors.dark};
  width: 100%;
`;
