import styled from "styled-components";

export type SwipeCounterProps = {
  activeIndex: number;
  size: number;
};
export const SwipeCounter = ({ size, activeIndex }: SwipeCounterProps) => {
  return (
    <StyledSwipeCounter>
      {activeIndex}/{size}
    </StyledSwipeCounter>
  );
};

const StyledSwipeCounter = styled.div<{}>``;
