import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectPosts } from './postsSlice';

const Container = styled.article`
  border: 1px solid ${(props) => props.theme.formGray};
  padding: 3px 6px;
  margin-bottom: 20px;
`;

const PostsList = () => {
  const posts = useSelector(selectPosts);
  const renderedPosts = posts.map(({
    id,
    content,
    title,
  }) => (
    <Container
      key={id}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </Container>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
