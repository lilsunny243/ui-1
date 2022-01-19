import React from "react";
import styled from "styled-components";
import { UIVariant } from "@/theme";

const InfoBoxWrapper = styled.div<{ variant?: "error" | UIVariant }>`
  padding: 1rem;
  border-radius: 5px;
  background: var(--primary);
  color: var(--text-on-bg);
  * {
    color: var(--text-on-bg);
  }

  ${(p) => {
    if (p.variant) {
      return `
      background-color: var(--${p.variant});
      `;
    }
  }}
`;

const InfoBox: React.FC<{
  variant: "error" | UIVariant;
  children: React.ReactNode;
}> = ({ variant, children }) => (
  <InfoBoxWrapper variant={variant}>{children}</InfoBoxWrapper>
);

export default InfoBox;
