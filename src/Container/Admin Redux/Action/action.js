import { GET_USERDETAILS, GET_APPLEYRS, GET_CONTACT } from '../type';
import { GetUserDetails,GetApplersDetails, GetContactDetails  } from '../api/axiosRequest';

const Action1 = () => {
    return function (dispatch) {
        return GetUserDetails().then((res) => {
            console.log("Respponce Data Is : ", res);

            dispatch({
                type: GET_USERDETAILS,
                payload: res.data,
            });
        });
    };
};
const Action2 = () => {
    return function (dispatch2) {
        return GetApplersDetails().then((res2) => {
            console.log("Respponce Data Is : ", res2);

            dispatch2({
                type: GET_APPLEYRS,
                payload: res2.data,
            });
        });
    };
};
const Action3 = () => {
    return function (dispatch3) {
        return GetContactDetails().then((res2) => {
            console.log("Respponce Data Is : ", res2);

            dispatch3({
                type: GET_CONTACT,
                payload: res2.data,
            });
        });
    };
};

export { Action1, Action2, Action3 };
