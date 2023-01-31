import react, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64'

import { useDispatch } from 'react-redux'
import { createPost } from '../../state/actions/posts'

const Form = () =>{

    // state for post data
    const [postData, setPostData] = useState({
        creator : '', title : '', message : '', 
        tags : '', selectedFile : ''
    });

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault(); // not to get the refresh in the browser

        dispatch(createPost(postData))

    }

    const clear = () => {

    }
    

    return(
        // paper is an div which has whitish background
        <Paper>
            <form autoComplete='off' noValidate onSubmit = {handleSubmit}>
                <Typography variant='h6'>Creating a Memory </Typography>
                <TextField name = "creator" variant='outlined' label = "Creator" value={postData.creator}
                // spread the post data :
                // every text field is we do the same thing but only change last property
                // that means all the data is going to persist while changing only the specific property
                // of that specific text field
                onChange = {(e) => setPostData({ ...postData, creator : e.target.value}) }
            />

            <TextField name = "creator" variant='outlined' label = "Creator" fullWidth value={postData.creator}onChange = {(e) => setPostData({ ...postData, creator : e.target.value}) }/>
            <TextField name = "title" variant='outlined' label = "Title" fullWidth value={postData.title}onChange = {(e) => setPostData({ ...postData, title : e.target.value}) }/>
            <TextField name = "message" variant='outlined' label = "Message" fullWidth value={postData.message}onChange = {(e) => setPostData({ ...postData, message : e.target.value}) }/>
            <TextField name = "tags" variant='outlined' label = "Tags" fullWidth value={postData.tags}onChange = {(e) => setPostData({ ...postData, tags : e.target.value}) }/>
            
            <div><FileBase type = "file" multiple = {false} onDone = {({base64}) => setPostData({ ...postData, selectedFile : base64})}/></div>
            <Button variant='contained' color = 'primary' size = 'large' type = "submit" fullWidth>Submit</Button>

            {/* for following code we are using onclick function rather than type submit */}
            <Button variant='contained' color = 'secondary' size = 'small' onClick={clear} fullWidth>Clear</Button> 



            </form>
        </Paper>
    )
}

export default Form