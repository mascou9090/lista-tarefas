import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div<ContainerProps>`
  display:flex;
  background-color:#20212c;
  padding:1rem;
  border-radius:1rem;
  margin-top:1rem;
  align-items:center;
  
  label {
    color: #ccc;
    text-decoration: ${props => props.done ? 'line-through' : 'initial'};
  }

  input {
    margin-right: 0.5rem;
    width:20px;
    height:20px;
  }
`;