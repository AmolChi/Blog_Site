import React, { useState } from "react";
import "../styles/createBlog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

function CreateBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const createBlog = async (event) => {
    event.preventDefault();

    if (title.length < 5) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (author.trim() === "" || author.length<3) {
      setAuthorError(true);
    } else {
      setAuthorError(false);
    }

    if (content.trim() === "" || content.length<20) {
      setContentError(true);
    } else {
      setContentError(false);
    }
    if(titleError || contentError || authorError)
        return;
    try {
      await axios.post("http://localhost:5000/api/v1/posts", {
        title: title,
        author: author,
        content: content,
      });
      alert("Added successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form" onSubmit={createBlog}>
      <div className="singleLine">
        <Typography variant="h6">Title</Typography>
        <TextField
          variant="standard"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          error={titleError}
          helperText={titleError ? "Title must be at least 5 characters" : ""}
        />
      </div>
      <div className="singleLine">
        <Typography variant="h6">Author</Typography>
        <TextField
          variant="standard"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          error={authorError}
          helperText={authorError ? "Author is required (minimum 3 characters)" : ""}
        />
      </div>
      <div className="singleLine">
        <Typography variant="h6">Content</Typography>
        <TextField
          multiline
          rows={4}
          variant="standard"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          error={contentError}
          helperText={contentError ? "Content is required (minimum 20 characters)" : ""}
        />
      </div>
      <Button type="submit" variant="contained" color="success">
        Publish
      </Button>
    </form>
  );
}

export default CreateBlog;
