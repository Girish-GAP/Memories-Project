import react from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { CardS, CardMediaS, CardActionsS, Box1S, Box2S, Box3S } from './postStyle'

const Post = ({ post, setCurrentId}) => {
    return (
        <Card>
            <CardMediaS image={post.selectedFile} />
            <div>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='h6'>{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div>
                <Typography variant='body2' color="textSecondary">
                    {
                        post.tags.map((tag) => `#${tag}`)
                    }
                </Typography>

                <Typography variant='h5' gutterBottom>{post.title}</Typography>

                <CardContent>
                    <Typography variant='h5' gutterBottom>{post.message}</Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary" onClick={() => { }}>
                        <ThumbUpIcon fontSize='small' />
                        Like
                        {post.likeCount}
                    </Button>

                    <div>
                    <Button size="small" color="primary" 

                            onClick={() => { 
                                setCurrentId(post._id)
                            }}>

                            <ModeEditIcon fontSize='small' />
                            Update
                        </Button>
                    </div>


                    <Button size="small" color="primary" onClick={() => { }}>
                        <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                </CardActions>
            </div>

        </Card>
    )
}

export default Post