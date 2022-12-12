import { GET_DETAILS } from '../type';
import { GET_APPLEYRS } from '../type';
import { GetApiDetails,GetApplersDetails  } from '../api/axiosRequest';

const Action = () => {
    return function (dispatch) {
        return GetApiDetails().then((res) => {
            console.log("Respponce Data Is : ", res);

            dispatch({
                type: GET_DETAILS,
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

export { Action, Action2 };
