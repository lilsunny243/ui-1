import React from "react";
import styled from "styled-components";

type GapOptions = "small" | "medium" | "large";

const gap2px = (gap: GapOptions) => {
  switch (gap) {
    case "small":
      return "0.5rem";
    case "medium":
      return "1rem";
    case "large":
      return "1.5rem";
    default:
      return "1rem";
  }
};

type FlexProps = {
  wrap?: boolean;
  gap?: GapOptions;
  direction?: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
};

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: ${(p) => (p.wrap ? "wrap" : "nowrap")};
  gap: ${({ gap = "medium" }) => gap2px(gap)};
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;

export default Flex;
