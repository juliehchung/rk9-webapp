import React, { FC, useState, useContext } from 'react';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import Card from '@mui/material/Card';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import useSWR from 'swr';
import palette from '../../theme/palette';
import { SessionContext } from '../../context/SessionContext';
import { BlogPost } from '../../types/BlogPost';
import AddOrEditBlogPost from './AddOrEditBlogPost';
import BlogPostCard from './BlogPostCard';

export const Blog: FC = () => {
  const [openAddOrEditDialog, setOpenAddOrEditDialog] = useState(false);
  const {
    state: { user },
  } = useContext(SessionContext);

  const { data: blogPosts } = useSWR<BlogPost[]>('/blogPosts', { suspense: true });

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          style={{
            marginTop: '30px',
            padding: '50px 50px 0 50px',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Button
            style={{ backgroundColor: palette.button.primary, color: palette.white }}
            onClick={() => setOpenAddOrEditDialog(true)}
          >
            Add Blog Post
          </Button>
        </Grid>
        <Grid
          item
          container
          style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 50px',
          }}
        >
          <Card
            style={{
              boxShadow: 'none',
              width: '100%',
            }}
            onClick={() => console.log('clicked post')}
          >
            {blogPosts && blogPosts.length && blogPosts[0] && blogPosts[0].image ? (
              <CardMedia
                component="img"
                height="350"
                image={blogPosts[0].image}
                alt={blogPosts[0].title}
              />
            ) : (
              <Box
                style={{
                  width: '100%',
                  height: '250px',
                  backgroundColor: palette.disabled,
                  color: palette.white,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ImageNotSupportedIcon style={{ fontSize: '4rem' }} /> <span>No Photo</span>
              </Box>
            )}
            <CardContent style={{ width: '100%', padding: '20px 0' }}>
              <Typography
                variant="h5"
                style={{
                  width: '100%',
                  borderBottom: `5px solid ${palette.paper.secondary}`,
                  paddingBottom: '20px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                {blogPosts && blogPosts.length && blogPosts[0] && blogPosts[0].title}
              </Typography>
              <Typography>{`${
                blogPosts && blogPosts.length && blogPosts[0] && blogPosts[0].post.substring(0, 450)
              }...`}</Typography>
              <Typography
                variant="subtitle2"
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  marginTop: '15px',
                  textDecoration: 'underline',
                }}
              >
                Read More
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item container style={{ paddingBottom: '50px', display: 'flex' }}>
        {blogPosts &&
          blogPosts.map((blogPost, blogPostIndex) => {
            if (blogPostIndex === 0) return;
            return <BlogPostCard key={blogPost.id} blogPost={blogPost} />;
          })}
      </Grid>
      <AddOrEditBlogPost
        open={openAddOrEditDialog}
        close={() => setOpenAddOrEditDialog(false)}
        blogPost={null}
      />
    </>
  );
};

export default Blog;
