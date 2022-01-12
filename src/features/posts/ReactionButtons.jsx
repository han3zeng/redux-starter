import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const Container = styled.div`
  margin-bottom: 20px;
  button {
    margin-right: 5px;
  }
`;

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

function ReactionButtons({
  postId,
  reactions,
}) {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      onClick={() => {
        dispatch(reactionAdded({
          postId,
          reaction: name,
        }));
      }}
    >
      {emoji}
      {' '}
      {reactions[name] || 0}
    </button>
  ));
  return <Container>{reactionButtons}</Container>;
}

export default ReactionButtons;
