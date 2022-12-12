import { GET_DETAILS } from '../type';
import { GET_APPLEYRS } from '../type';

const initialState ={
    details:[],
};
const initialState2 ={
    details2:[],
};


const Reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DETAILS:
            return{
            details: action.payload
        }
        default:
            return state;
    }
};
const Reducer2 = (state = initialState2, action) => {
    switch (action.type){
        case GET_APPLEYRS:
            return{
            details2: action.payload
        }
        default:
            return state;
    }
};

export {Reducer, Reducer2};
