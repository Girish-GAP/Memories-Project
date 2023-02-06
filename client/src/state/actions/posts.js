import * as api from '../../api/index'

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

// dispatch is coming from redux thunk
export const createPost = (post) =>
    // another error function
    async (dispatch) => {  // dispatch is coming from redux thunk
        try {
            // we need to get the data // destructuring data from response
            const { data } = await api.createPost(post) // making post api request to backend server

            // after getting the data from backend 
            dispatch({ type: 'CREATE', payload: data });
        } catch (error) {
            console.log(error);
        }
    }

export const updatePost = (id, postData) => 
    async (dispatch) => {
        try {
            const {data} = await api.updatePost(id,postData);     // returning updated post

            dispatch({ type: 'UPDATE', payload: data });
        }
        catch (error) {
            console.log(error);     // never use error.message use error becuase it's give more info
        }
    }

export const deletePost = (id) => 
    async (dispatch) => {
        try{
            await api.deletePost(id);
            dispatch({type : 'DELETE', payload : id});
        }
        catch(error){
            console.log(error);
        }

    }


export const likePost = (id) =>
    async (dispatch) => {
        try{
            const {data} = await api.likePost(id);
            dispatch({type : 'LIKE', payload : data});
        }catch(error){
            console.log(error);
        }
    }



