import React, {useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material'

import memories from './images/memories.png'

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { Appbar, GridContainerS, Heading} from "./styles";

import { useDispatch } from "react-redux";
import { getPosts } from './state/actions/posts'


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    

    return(
        <Container maxWidth = "lg">
            <AppBar position="static" color = "inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img style={{marginLeft:'15px'}} src = {memories} alt = "memories" height= "60" width= "60"/>
            </AppBar>
            <Grow in>
                <Container>
                   <Grid container justify = "space-between" alignItems= "stretch" spacing = {3}>
                        <Grid item xs = {12} sm = {7}> 
                            <Posts/>
                        </Grid>

                        <Grid item xs = {12} sm = {4}> 
                            <Form/>
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
        </Container>
    )
}

export default App;