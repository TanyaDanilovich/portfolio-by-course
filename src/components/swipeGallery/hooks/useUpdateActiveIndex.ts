import { RefObject, useEffect, useState } from "react";

export const useUpdateActiveIndex = (
  containerRef: RefObject<HTMLDivElement>,
) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentNode = containerRef?.current;

    if (!currentNode) {
      return;
    }

    const scroll = () => {
      const dataContainer = currentNode.getBoundingClientRect();

      const firsTElementData =
        currentNode.firstElementChild?.getBoundingClientRect();

      if (!firsTElementData) return;
      // console.log("dataContainer", dataContainer);
      // console.log("firsTElementData", firsTElementData);
      const shift = firsTElementData.left - dataContainer.left;
      // console.log(shift);
      setActiveIndex(Math.abs(Math.round(shift / firsTElementData.width)));
      //console.log(Math.abs(Math.round(shift / dataContainer.width)));
    };

    currentNode.addEventListener("scroll", scroll);

    return () => currentNode.removeEventListener("scroll", scroll);
  }, [containerRef]);

  return activeIndex;
};
