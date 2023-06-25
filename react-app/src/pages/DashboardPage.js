import * as React from "react";
import Grid from "@mui/material/Grid";
import FeaturedPost from "../components/FeaturedPost"
import MainFeaturedPost from "../components/MainFeaturedPost"
import Box from "@mui/material/Box";

import {featuredPosts,mainFeaturedPost} from "../_mock/_blogs";

const HomePage = () => {
  return (
      <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>

      </Box>
  );
};
export default HomePage;