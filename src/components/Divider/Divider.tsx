import styled from "styled-components";

const Divider = styled.div<{ margin?: boolean }>`
  width: 100%;
  height: 1px;
  background: var(--border-color);
  ${({ margin = true }) =>
    margin &&
    `
    margin-top: 3rem;
    margin-bottom: 3rem;
  `}
`;

export default Divider;
