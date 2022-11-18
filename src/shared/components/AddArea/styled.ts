import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid #555;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0rem;
  align-items: center;

  input {
    border: 0;
    background-color: transparent;
    outline: 0;
    color: #fff;
    font-size: 1.5rem;
  }
`;

export const ButtonS = styled.button<{isDesabled:boolean}>`
  margin-right: 1rem;
  font-size: 2.5rem;
  background-color: transparent;
  color: #fff;
  border: none;
  opacity:${({ isDesabled }) => isDesabled ? '1' : '0.4' };
  cursor:${({ isDesabled }) => isDesabled ? 'pointer' : 'default' };
`;
