import react, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64'

import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../state/actions/posts'




// Get the current id

const Form = ({ currentId , setCurrentId}) => {

    // state for post data
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '',
        tags: '', selectedFile: ''
    });

    // only data of updated post
    const post = useSelector((state) => currentId ?     // if currentId
        state.posts.find((p) =>
            p._id == currentId
        )
        : // else
        null);

    // use useEffect to populate the values of form
    useEffect(() => {
        if (post) setPostData(post);
    },

        [post]  // when post value changes from nothing to the actual post then we want useEffect execute
    )

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault(); // not to get the refresh in the browser


        if (currentId) {   // it means form is submited for update
            dispatch(updatePost(currentId, postData))
        } else  // creating new post
        {
            dispatch(createPost(postData))
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData(
            { creator: '', title: '', message: '',tags: '', selectedFile: ''}
        )
    }


    return (
        // paper is an div which has whitish background
        <Paper>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Edit a Memory' :  'Creating a Memory'}</Typography>
                <TextField name="creator" variant='outlined' label="Creator" fullWidth value={postData.creator}
                    // spread the post data :
                    // every text field is we do the same thing but only change last property
                    // that means all the data is going to persist while changing only the specific property
                    // of that specific text field
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField name="title" variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant='outlined' label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />

                <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button variant='contained' color='primary' size='large' type="submit" fullWidth>Submit</Button>

                {/* for following code we are using onclick function rather than type submit */}
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form