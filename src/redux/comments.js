import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state= { 
    errMess: null,
    comments: []
 }, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading: false, errmess: null, comments: action.payload }
        
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, errmess: action.payload, commets: [] }

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};
        
        default:
            return state;
    }
}