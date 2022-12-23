import { GET_CONTACT, GET_USERDETAILS, GET_APPLEYRS } from '../type';

const initialState ={
    details:[],
};
const initialState2 ={
    details2:[],
};
const initialState3 ={
    details3:[],
};


const Reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_USERDETAILS:
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
const Reducer3 = (state = initialState3, action) => {
    switch (action.type){
        case GET_CONTACT:
            return{
            details3: action.payload
        }
        default:
            return state;
    }
};

export {Reducer, Reducer2, Reducer3};
