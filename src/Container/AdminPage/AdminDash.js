import React, { useEffect } from 'react';
import './AdminDash.css';
import { Action1, Action2, Action3 } from '../Admin Redux/Action/action'
import { useDispatch, useSelector } from 'react-redux';

const AdminDash = () => {
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    const dispatch3 = useDispatch();
    const responseData = useSelector((state) => state.Reducer.details);
    const responseData2 = useSelector((state) => state.Reducer2.details2);
    const responseData3 = useSelector((state) => state.Reducer3.details3);
    console.log('responceData Is from actions for users___________', responseData);
    console.log('responceData Is from actions for appleyrs___________', responseData2);
    console.log('responceData Is from actions for Contact___________', responseData3);
    useEffect(() => {
        dispatch(Action1());
        dispatch2(Action2());
        dispatch3(Action3());
    }, [dispatch, dispatch2, dispatch3]);


    const result = responseData.map((data, index) => {
        return (<>
            <div className="col d-flex justify-content-center align-items-center">
                <div className="my-admin-box">
                    <ul key={index} className='list-type'>
                        <li>{data.id}</li>
                        <li>{data.Email}</li>
                        <li>{data.UserName}</li>
                        <li>{data.Password}</li>
                    </ul>
                </div>
            </div>
        </>
        )
    })
    const result2 = responseData2.map((data2, index) => {
        return (<>
            <div className="col d-flex justify-content-center align-items-center">
                <div className="my-admin-box">
                    <ul key={index} className='list-type'>
                        <li>{data2.id}</li>
                        <li>{data2.applyName}</li>
                        <li>{data2.applyEmail}</li>
                        <li>{data2.applyMobile}</li>
                        <li>{data2.applyExperience}</li>
                        <li>{data2.applyMessage}</li>
                    </ul>
                </div>
            </div>
        </>
        )
    })
    const result3 = responseData3.map((data3, index) => {
        return (<>
            <div className="col d-flex justify-content-center align-items-center">
                <div className="my-admin-box">
                    <ul key={index} className='list-type'>
                        <li>{data3.id}</li>
                        <li>{data3.Name}</li>
                        <li>{data3.Email}</li>
                        <li>{data3.Mobile}</li>
                        <li>{data3.Subject}</li>
                        <li>{data3.Message}</li>
                    </ul>
                </div>
            </div>
        </>
        )
    })
    return (
        <>
            <div className="row">
        `<h1 className='text-center'>!!!!  ADMIN DASHBOARD  !!!!</h1>
                <div className='col-md-12 col-lg-4 text-center'>
                    <h1>!!! All Users !!!</h1>
                    {result}
                </div>
                <div className='col-md-12 col-lg-4 text-center'>
                    <h1>!!! All Appleyrs !!!</h1>
                    {result2}
                </div>
                <div className='col-md-12 col-lg-4 text-center'>
                    <h1>!!! All Contacters !!!</h1>
                    {result3}
                </div>
            </div>
        </>

    );
}

export default AdminDash;
