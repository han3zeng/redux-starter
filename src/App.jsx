import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './app/NavBar';
import PostsList from './features/posts/PostList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';
import normalize from './utils/normalize';


const theme = {
  formGray: '#ccc',
  formHighlightGray: '#333',
  errorRed: 'red',
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
};

const GlobalStyle = createGlobalStyle`
  ${normalize};
  body {
    background: white;
    padding: 10px;
  }

  section {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1.5rem;
  }

  button {
    background-color: white;
    outline: none;
    border: 1px solid ${(props) => props.theme.formGray};
    padding: 6px 5px;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 2px gray;
    }
    &:disabled {
      box-shadow: none;
      cursor: not-allowed;
    }
  }

  input {
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme.formGray};
    padding: 8px 4px;
    outline: none;
    width: 100%;
    &:focus {
      border: 1px solid ${(props) => props.theme.formHighlightGray};
    }
    &:invalid  {
      border: 1px solid ${(props) => props.theme.errorRed};
    }
  }

  select {
    border: 1px solid ${(props) => props.theme.formGray};
    padding: 6px 3px;
    outline: none;
    &:focus {
      border: 1px solid ${(props) => props.theme.formHighlightGray};
    }
    &:invalid  {
      border: 1px solid ${(props) => props.theme.errorRed};
    }
  }

  textarea {
    box-sizing: border-box;
    resize: none;
    padding: 8px 4px;
    outline: none;
    width: 100%;
    border: 1px solid ${(props) => props.theme.formGray};
    &:focus {
      border: 1px solid ${(props) => props.theme.formHighlightGray};
    }
  }

  a {
    color: black;
    text-decoration: none;
    background-color: white;
    border: 1px solid ${(props) => props.theme.formGray};
    padding: 6px 5px;
    cursor: pointer;
    &:hover {
      border: 1px solid ${(props) => props.theme.formHighlightGray};
    }
  }

  h2 {
    font-size: 24px;
  }

  label {
    > p {
      margin-bottom: 0.5em;
    }
  }
`;

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<PostsList />}
          />
          <Route
            path="/add-post"
            element={<AddPostForm />}
          />
          <Route
            path="/posts/:postId"
            element={<SinglePostPage />}
          />
          <Route
            path="/edit-post/:postId"
            element={<EditPostForm />}
          />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
