import styled from "styled-components";

import { SkillType } from "./skill.types.";
import React from "react";
import { Icon } from "../../components/Icon";
import { SectionSecondaryTitle } from "../../components/styled/SectionSecondaryTitle";
import { theme } from "../../styles/Theme.styled";
import { FlexWrapper } from "../../components/styled/FlexWrapper";

type props = SkillType;
export const Skill = ({ title, text, icon }: props) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={"column-reverse"} align={'center'}>
        <SectionSecondaryTitle>{title}</SectionSecondaryTitle>

        {/*<SkillText>{text}</SkillText>*/}
        <Icon
          id={icon.iconId}
          sprite={icon.iconUrl}
          width={icon.width || "50"}
          height={icon.height || "50"}
          viewBox={icon.viewBox}
          fill={"rgba(255,255,255,0.3)"}
        />
      </FlexWrapper>
    </StyledSkill>
  );
};

type StyledSkillProps = {};
const StyledSkill = styled.article<StyledSkillProps>`
  padding: 1rem;
  outline: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: ${theme.colors.light};
  }

  width: 33.333%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);

    h3 {
      color: ${theme.colors.accent_1};
    }

    svg {
      fill: ${theme.colors.accent_2};
    }
  }
`;

type StyleSkillTitleProps = {};
const StyleSkillTitle = styled.h2<StyleSkillTitleProps>``;

type SkillTextProps = {};
const SkillText = styled.div<SkillTextProps>``;
