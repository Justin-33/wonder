import React, { useState } from "react";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
  Box,
  Grid,
} from "@mui/material";

const Blogfield = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [status, setStatus] = useState("");
  const [commentsEnabled, setCommentsEnabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleContinue = () => {
    // continue
  };

  
  
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="lifestyle">Lifestyle</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="travel">Travel</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            fullWidth
          />
        </Grid>
       
        <Grid item xs={12}>
        <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={7}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Publish Date"
            type="datetime-local"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="published">Published</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={commentsEnabled}
                onChange={(e) => setCommentsEnabled(e.target.checked)}
              />
            }
            label="Enable Comments"
          />
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
            >
              continue
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blogfield;
