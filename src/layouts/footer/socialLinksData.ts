import socialNetworkSprite from "../../assets/svg/socialNetworkSprite.svg";
import { v4 as uuidv4 } from "uuid";
import { SkillType } from "../skills/skill.types.";

export const socialNetworksData: Omit<SkillType, "text">[] = [
  {
    id: uuidv4(),
    title: "facebook",
    icon: {
      iconUrl: socialNetworkSprite,
      iconId: "facebook",
      // width: "21",
      // height: "21",
      // viewBox: "0 0 21 21",
    },
  },
  {
    id: uuidv4(),
    title: "github",
    icon: { iconUrl: socialNetworkSprite, iconId: "github" },
  },
  {
    id: uuidv4(),
    title: "instagram",
    icon: { iconUrl: socialNetworkSprite, iconId: "instagram" },
  },
  {
    id: uuidv4(),
    title: "linkedin",
    icon: {
      iconUrl: socialNetworkSprite,
      iconId: "linkedin",
      // viewBox: "0 0 50 50",
    },
  },
  {
    id: uuidv4(),
    title: "telegram",
    icon: {
      iconUrl: socialNetworkSprite,
      iconId: "telegram",
    },
  },
  {
    id: uuidv4(),
    title: "twitter",
    icon: {
      iconUrl: socialNetworkSprite,
      iconId: "twitter",
    },
  },
];

//
// import socialNetworkSprite from "../../assets/svg/socialNetworkSprite.svg";
// import { v4 as uuidv4 } from "uuid";
// import { SkillType } from "../skills/skill.types.";
//
// export const socialNetworksData: Omit<SkillType, "text">[] = [
//   {
//     id: uuidv4(),
//     title: "facebook",
//     icon: {
//       iconUrl: socialNetworkSprite,
//       iconId: "facebook",
//       // width: "21",
//       // height: "21",
//       // viewBox: "0 0 21 21",
//     },
//   },
//   {
//     id: uuidv4(),
//     title: "github",
//     icon: { iconUrl: socialNetworkSprite, iconId: "github" },
//   },
//   {
//     id: uuidv4(),
//     title: "react",
//     icon: { iconUrl: socialNetworkSprite, iconId: "react" },
//   },
//   {
//     id: uuidv4(),
//     title: "instagram",
//     icon: { iconUrl: socialNetworkSprite, iconId: "instagram" },
//   },
//   {
//     id: uuidv4(),
//     title: "linkedin",
//     icon: {
//       iconUrl: socialNetworkSprite,
//       iconId: "linkedin",
//       // viewBox: "0 0 50 50",
//     },
//   },
//   {
//     id: uuidv4(),
//     title: "telegram",
//     icon: {
//       iconUrl: socialNetworkSprite,
//       iconId: "telegram",
//     },
//   },
//   {
//     id: uuidv4(),
//     title: "twitter",
//     icon: {
//       iconUrl: socialNetworkSprite,
//       iconId: "twitter",
//     },
//   },
// ];
