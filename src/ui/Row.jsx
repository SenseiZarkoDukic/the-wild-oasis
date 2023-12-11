import styled, { css } from "styled-components";

const Row = styled.div`
  ${css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6rem;
    width: 100%;
  `};
`;

export default Row;
