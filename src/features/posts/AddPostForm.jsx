import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectUsers } from '../users/usersSlice';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(postAdded({
        title,
        content,
        userId,
      }));
    }
    setTitle('');
    setContent('');
  };

  const users = useSelector(selectUsers);
  const usersOptions = users.map(({
    id,
    name,
  }) => (
    <option
      key={id}
      value={id}
    >
      {name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

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
          htmlFor="postAuthor"
        >
          <p>Author: </p>
          <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
          >
            <option value="" />
            {usersOptions}
          </select>
        </label>
        <label
          htmlFor="postContent"
        >
          <p>Content: </p>
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
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
