import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { selectPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const Container = styled.article`
  border: 1px solid ${(props) => props.theme.formGray};
  padding: 10px 6px;
  margin-bottom: 20px;
  h3 {
    margin-top: 0;
  }
`;

const PostsList = () => {
  const posts = useSelector(selectPosts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map(({
    id,
    date,
    content,
    title,
    userId,
    reactions
  }) => (
    <Container
      key={id}
    >
      <h3>{title}</h3>
      <PostAuthor
        userId={userId}
      />
      <TimeAgo
        timestamp={date}
      />
      <p>{content}</p>
      <ReactionButtons
        postId={id}
        reactions={reactions}
      />
      <Link
        to={`/posts/${id}`}
      >
        View Post
      </Link>
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
