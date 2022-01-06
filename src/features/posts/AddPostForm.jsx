import React, { useState } from 'react';

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

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
      </form>
    </section>
  );
}

export default AddPostForm;
