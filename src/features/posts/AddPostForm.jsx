import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({
        id: nanoid(),
        title,
        content,
      }));
    }
    setTitle('');
    setContent('');
  };

  return (
    <section>
      <h2>Add a New Post</h2>
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

export default AddPostForm;
