import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPost } from './postsSlice';

function SinglePostPage() {
  const urlParams = useParams();
  const { postId } = urlParams;
  const post = useSelector(
    selectPost({
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
        <p className="post-content">{post.content}</p>
      </article>
      <Link
        to={`/editPost/${postId}`}
      >
        Edit Post
      </Link>
    </section>
  );
}

export default SinglePostPage;
