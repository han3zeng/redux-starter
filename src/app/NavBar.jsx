import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.formGray};
`;

function Navigation() {
  return (
    <Container>
      <section>
        <h1>Redux Essentials Example</h1>
      </section>
    </Container>
  );
}

export default Navigation;
