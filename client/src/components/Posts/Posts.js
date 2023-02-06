import { CircularProgress, Grid } from '@mui/material';
import react from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post'

const Posts = ({currentId, setCurrentId}) =>{

    // call back function inside useSelector 
    // as a parameter (state) : we get access to whole global redux store or state
    // then we can immediately return state that posts
    const posts = useSelector((state)=> state.posts);

    // console.log(posts);

    return(
        !posts.length ? <CircularProgress /> : (    // if post.length will be 0 then it will shwo circularprogress other wise grid
            <Grid container alignItems= "stretch" spacing = {3}>
                {
                    posts.map((post) => (
                       <Grid key = {post._id} item xs = {12} sm = {6}>
                            <Post post = {post} setCurrentId = {setCurrentId} />
                       </Grid>
                    ))
                }
            </Grid>
        )
    );
} 

export default Posts


// in xs we define how large it should be in small or mobile devices