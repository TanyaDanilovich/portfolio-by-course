import skillsSprite from "../../assets/svg/skillsSprite.svg";
import { SkillType } from "./skill.types.";
import { v4 as uuidv4 } from "uuid";

export const skillsData: SkillType[] = [
  {
    id: uuidv4(),
    title: "HTML5",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    icon: {
      iconUrl: skillsSprite,
      iconId: "html",
      width: "64",
      height: "64",
      viewBox: "0 0 512 512",
    },
  },
  {
    id: uuidv4(),
    title: "CSS3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    icon: { iconUrl: skillsSprite, iconId: "css3" },
  },
  {
    id: uuidv4(),
    title: "react",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    icon: { iconUrl: skillsSprite, iconId: "react" },
  },
  {
    id: uuidv4(),
    title: "typescript",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    icon: { iconUrl: skillsSprite, iconId: "typescript" },
  },
  {
    id: uuidv4(),
    title: "styled components",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    icon: {
      iconUrl: skillsSprite,
      iconId: "styled-component",
      viewBox: "0 0 50 50",
    },
  },
  {
    id: uuidv4(),
    title: "javascript",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    icon: {
      iconUrl: skillsSprite,
      iconId: "javascript",
    },
  },
];
