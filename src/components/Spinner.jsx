import React from 'react';
import styled, { keyframes } from 'styled-components';

const gray = '#6e6c67';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 5px;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #6e6c67;
  width: 120px;
  height: 120px;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
`;

const Spinner = ({
  text = '',
  size = '5em'
}) => {
  const header = text ? <h4>{text}</h4> : null;
  return (
    <Container>
      {header}
      <Loader style={{ height: size, width: size }} />
    </Container>
  );
};

export default Spinner;
