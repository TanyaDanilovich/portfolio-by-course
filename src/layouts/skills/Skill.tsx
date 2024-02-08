import styled from "styled-components";
import { SectionMainTitle } from "../../components/styled/SectionMainTitle";
import { SkillType } from "./skill.types.";
import React from "react";
import { Icon } from "../../components/Icon";

type props = SkillType;
export const Skill = ({ title, text, icon }: props) => {
  return (
    <StyledSkill>
      <SectionMainTitle>{title}</SectionMainTitle>

      <SkillText>{text}</SkillText>
      <Icon
        id={icon.iconId}
        sprite={icon.iconUrl}
        width={icon.width || "50"}
        height={icon.height || "50"}
        viewBox={icon.viewBox}
      />
    </StyledSkill>
  );
};

type StyledSkillProps = {};
const StyledSkill = styled.div<StyledSkillProps>``;

type StyleSkillTitleProps = {};
const StyleSkillTitle = styled.h2<StyleSkillTitleProps>``;

type SkillTextProps = {};
const SkillText = styled.div<SkillTextProps>``;
