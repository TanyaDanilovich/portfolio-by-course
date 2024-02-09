import { v4 as uuidv4 } from "uuid";
import { ClientType } from "./Client.types.";
import work2 from "../../assets/jpg/work/image-02-432x228.jpg";
import work3 from "../../assets/jpg/work/image-03-432x238.jpg";
import work7 from "../../assets/jpg/work/image-07-432x238.jpg";

export const clientsData: ClientType[] = [
  {
    id: uuidv4(),
    name: "Donut Country",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work2,
  },
  {
    id: uuidv4(),
    name: "Furni",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work3,
  },
  {
    id: uuidv4(),
    name: "uDesign",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    id: uuidv4(),
    name: "ProKnife",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    id: uuidv4(),
    name: "Floral Paradise",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    id: uuidv4(),
    name: "Poultrix",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    imageUrl: work7,
  },
];
