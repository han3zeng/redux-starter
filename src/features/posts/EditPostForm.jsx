import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postUpdated, selectPostById } from './postsSlice';

function EditPostForm() {
  const urlParams = useParams();
  const navigate = useNavigate();
  const { postId } = urlParams;
  const post = useSelector(selectPostById({
    postId,
  }));
  const dispatch = useDispatch();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({
        id: postId,
        title,
        content,
      }));
      navigate(`/posts/${postId}`);
    }
    setTitle('');
    setContent('');
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label
          htmlFor="postTitle"
        >
          <p>Post Title: </p>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </label>
        <label
          htmlFor="postContent"
        >
          <p>Post Content: </p>
          <textarea
            type="text"
            id="postContent"
            value={content}
            onChange={onContentChange}
          />
        </label>
        <button
          type="button"
          onClick={onSavePostClicked}
        >
          Save Post
        </button>
      </form>
    </section>
  );
}

export default EditPostForm;
