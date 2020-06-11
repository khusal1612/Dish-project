import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';

export const initialState ={
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS,
};


export const Reducer = (state = initialState, action) => {
    return state;
};