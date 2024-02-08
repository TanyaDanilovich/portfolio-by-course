import styled from "styled-components";

import { SkillType } from "./skill.types.";
import React from "react";
import { Icon } from "../../components/Icon";
import {SectionSecondaryTitle} from '../../components/styled/SectionSecondaryTitle';

type props = SkillType;
export const Skill = ({ title, text, icon }: props) => {
  return (
    <StyledSkill>
      <SectionSecondaryTitle>{title}</SectionSecondaryTitle>

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
const StyledSkill = styled.article<StyledSkillProps>``;

type StyleSkillTitleProps = {};
const StyleSkillTitle = styled.h2<StyleSkillTitleProps>``;

type SkillTextProps = {};
const SkillText = styled.div<SkillTextProps>``;
