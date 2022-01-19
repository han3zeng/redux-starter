import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { selectAllPosts, fetchPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { REQUEST_STATUS } from '../../constants';
import Spinner from '../../components/Spinner';

const Container = styled.article`
  border: 1px solid ${(props) => props.theme.formGray};
  padding: 10px 6px;
  margin-bottom: 20px;
  h3 {
    margin-top: 0;
  }
`;

const PostExcerpt = ({
  post
}) => {
  const {
    id,
    date,
    content,
    title,
    user,
    reactions
  } = post;
  return (
    <Container
      key={id}
    >
      <h3>{title}</h3>
      <PostAuthor
        userId={user}
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
  )
};

const PostsList = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  useEffect(() => {
    if (postStatus === REQUEST_STATUS.idle) {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const content = (() => {
    if (postStatus === REQUEST_STATUS.loading) {
      return <Spinner />;
    }
    if (postStatus === REQUEST_STATUS.succeeded) {
      return orderedPosts.map((post) => (<PostExcerpt post={post} />));
    }
    if (postStatus === REQUEST_STATUS.failed) {
      return <div>{error}</div>;
    }
    return null;
  })();

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
