import { StyledSection } from "../../components/styled/StyledSection";
import { SectionMainTitle } from "../../components/styled/SectionMainTitle";
import { skillsData } from "./skillsData";
import { Skill } from "./Skill";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Container } from "../../components/styled/Container";

export const Skills = () => {
  return (
    <StyledSection>
      <Container>
        <SectionMainTitle>My Skills</SectionMainTitle>
        <FlexWrapper>
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
    </StyledSection>
  );
};
