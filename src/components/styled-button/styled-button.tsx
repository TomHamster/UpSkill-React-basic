import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ primary?: boolean }>`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #000;
  color: white;
  border: 2px solid white;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      border: 2px solid black;
      background: white;
      color: black;
    `}
`;
