import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

function SinglePostPage() {
  const urlParams = useParams();
  const { postId } = urlParams;
  const post = useSelector(
    selectPostById({
      postId,
    }),
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor
          userId={post.user}
        />
        <TimeAgo
          timestamp={post.date}
        />
        <p className="post-content">{post.content}</p>
      </article>
      <ReactionButtons
        postId={post.id}
        reactions={post.reactions}
      />
      <Link
        to={`/edit-post/${postId}`}
      >
        Edit Post
      </Link>
    </section>
  );
}

export default SinglePostPage;
