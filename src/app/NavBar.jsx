import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.formGray};
  > section {
    > div {
      display: flex;
    }
  }
  a {
    border: none;
    box-sizing: border-box;
    &:hover {
      border: none;
    }
  }
`;

const tabs = [
  'posts',
  'addPost',
];

const navPath = {
  posts: {
    to: '/',
    name: 'Posts',
  },
  addPost: {
    to: '/add-post',
    name: 'Add Post',
  },
};

function Navigation() {
  const Tabs = tabs.map((tab) => (
    <>
      <NavLink
        key={navPath[tab].name}
        to={navPath[tab].to}
        style={({ isActive }) => ({
          color: isActive ? '#333' : '#A9A9A9',
        })}
      >
        {navPath[tab].name}
      </NavLink>
    </>
  ));

  return (
    <Container>
      <section>
        <h1>Redux Essentials Example</h1>
        <div>
          {Tabs}
        </div>
      </section>
    </Container>
  );
}

export default Navigation;
