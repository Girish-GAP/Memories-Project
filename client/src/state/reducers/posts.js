export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL' : 
            return action.payload;

        case 'CREATE' : 
            return [ ...posts, action.payload];

        default:
            return posts;
    }
}


/*

    const reducer = (state, action) => {
        if(action.type == 'CREATE'){
            return aciton
            // state return by action
            return ...
        }
    }

*/