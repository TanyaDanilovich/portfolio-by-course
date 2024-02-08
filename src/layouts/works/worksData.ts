import { v4 as uuidv4 } from "uuid";
import { WorkType } from "./work.types.";
import work2 from "../../assets/jpg/work/image-02-432x228.jpg";
import work3 from "../../assets/jpg/work/image-03-432x238.jpg";
import work4 from "../../assets/jpg/work/image-04-432x228.jpg";
import work5 from "../../assets/jpg/work/image-05-432x238.jpg";
import work6 from "../../assets/jpg/work/image-06-432x228.jpg";
import work7 from "../../assets/jpg/work/image-07-432x238.jpg";

export const worksData: WorkType[] = [
  {
    id: uuidv4(),
    title: "Donut Country",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work2,
  },
  {
    id: uuidv4(),
    title: "Furni",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work3,
  },
  {
    id: uuidv4(),
    title: "uDesign",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work4,
  },
  {
    id: uuidv4(),
    title: "ProKnife",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work5,
  },
  {
    id: uuidv4(),
    title: "Floral Paradise",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work6,
  },
  {
    id: uuidv4(),
    title: "Poultrix",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work7,
  },
];
