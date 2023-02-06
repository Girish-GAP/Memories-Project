import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material'

import memories from './images/memories.png'

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { Appbar, GridContainerS, Heading} from "./styles";

import { useDispatch } from "react-redux";
import { getPosts } from './state/actions/posts'


// we want to keep id of memroy after click on update
// so we can use that id and prefilled form
// to do that we will use redux 
// we can use app component because it's an parent of both 'post' and 'form' component.


const App = () => {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    

    return(
        <Container maxWidth = "lg">
            <AppBar position="static" color = "inherit" style={{marginBottom:'45px'}}>
                <Typography variant="h2" align="center">Memories</Typography>
                <img style={{marginLeft:'15px'}} src = {memories} alt = "memories" height= "60" width= "60"/>
            </AppBar>
            <Grow in>
                <Container>
                   <Grid container justify = "space-between" alignItems= "stretch" spacing = {3}>
                        <Grid item xs = {12} sm = {7}> 
                            {/* pass setid method */}
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>

                        <Grid item xs = {12} sm = {4}> 
                            {/* pass current id and setid method to the form  */}
                            <Form currentId = {currentId} setCurrentId = {setCurrentId}/>    
                        </Grid>
                    </Grid> 
                </Container>
            </Grow>
        </Container>
    )
}

export default App;