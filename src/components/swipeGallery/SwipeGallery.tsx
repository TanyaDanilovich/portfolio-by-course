import styled from "styled-components";
import { ReactNode, useEffect, useRef, useState } from "react";
import { outline } from "../../styles/mixins";
import { SwipeButton } from "./SwipeButton/SwipeButton";
import { SwipeCounter } from "./SwipeCounter/SwipeCounter";
import { useUpdateActiveIndex } from "./hooks/useUpdateActiveIndex";

export type SwipeGalleryProps = {
  images: {
    id: string;
    imageUrl: string;
    description: string;
    title: string;
  }[];
  children?: ReactNode;
};

export const SwipeGallery = ({ images }: SwipeGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<null | HTMLDivElement>(null);

  const scrollActiveIndex = useUpdateActiveIndex(containerRef);

  useEffect(() => {
    setActiveIndex(scrollActiveIndex);
  }, [scrollActiveIndex]);

  const move = (newActiveElement: number) => {
    const currentNode = containerRef.current;
    if (!currentNode) return;
    setActiveIndex(newActiveElement);
    const dataElement = currentNode.firstElementChild?.getBoundingClientRect();
    if (dataElement) {
      currentNode.scrollTo({
        left: newActiveElement * dataElement.width,
        behavior: "smooth",
      });
    }
  };

  const moveLeft = () => {
    if (activeIndex >= 1) move(activeIndex - 1);
  };

  const moveRight = () => {
    if (activeIndex < images.length - 3) move(activeIndex + 1);
  };

  const preLoading = (index: number) => {
    return (
      activeIndex - 1 === index ||
      activeIndex + 1 === index ||
      activeIndex + 2 === index ||
      activeIndex === index
    );
  };

  return (
    <StyledSwipeGallery>
      <SwipeGalleryContainer ref={containerRef}>
        {images.map((image, index) => (
          <SwipeGalleryItem key={index}>
            <img
              src={image.imageUrl}
              alt={image.description}
              loading={preLoading(index) ? undefined : "lazy"}
            />
            {/*{children}*/}
          </SwipeGalleryItem>
        ))}
      </SwipeGalleryContainer>

      <StyledSwipeNavigation>
        <SwipeButton
          name={"left"}
          onClick={moveLeft}
          disabled={activeIndex === 0}
        />
        <SwipeCounter activeIndex={activeIndex + 1} size={images.length} />
        <SwipeButton
          name={"right"}
          onClick={moveRight}
          disabled={activeIndex === images.length - 3}
        />
      </StyledSwipeNavigation>
    </StyledSwipeGallery>
  );
};

export const StyledSwipeGallery = styled.div<{}>``;

export const SwipeGalleryContainer = styled.div<{}>`
  display: flex;
  overflow-x: scroll;
  position: relative;
  scroll-snap-type: x mandatory;

  ${outline(10, "green")}
  &::-webkit-scrollbar {
    //display: none;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const SwipeGalleryItem = styled.div<{}>`
  min-width: 33.33333%;
  display: inline-block;
  text-align: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const StyledSwipeNavigation = styled.div<{}>`
  display: grid;
  grid-template-columns: auto auto auto;
`;
