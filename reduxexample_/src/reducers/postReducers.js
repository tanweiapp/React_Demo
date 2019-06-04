import { FETCH_POSTS,NEW_POST } from "../actions/types";

// reducers : 返回新的状态

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState,action) {
    // console.log('reducer')
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items:action.payload
            }
            case NEW_POST:
            return {
                ...state,
                item:action.payload
            }
        default:
            return state;
    }
}
