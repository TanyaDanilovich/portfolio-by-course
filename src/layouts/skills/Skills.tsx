import { StyledSection } from "../../components/styled/StyledSection";
import { SectionMainTitle } from "../../components/styled/SectionMainTitle";
import { skillsData } from "./skillsData";
import { Skill } from "./Skill";
import { StyledFlexWrapper } from "../../components/styled/StyledFlexWrapper";

export const Skills = () => {
  return (
    <StyledSection>
      <SectionMainTitle>My Skills</SectionMainTitle>
      <StyledFlexWrapper>
        {skillsData.map((skill) => (
          <Skill
            id={skill.id}
            key={skill.id}
            title={skill.title}
            text={skill.text}
            icon={skill.icon}
          />
        ))}
      </StyledFlexWrapper>
    </StyledSection>
  );
};
