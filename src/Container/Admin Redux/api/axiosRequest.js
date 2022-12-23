import axios from "axios"
export async function AxiosRequest(url,method,headers,params){
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
        timeout:1000
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data: {},
        timeout:1000
    })
}

const GetUserDetails = ()=>{
    const headers = {
        'Content-Type':'application/json',
    }
    return AxiosRequest("http://localhost:4000/jobvilla_users","GET", headers, {})
}
const GetApplersDetails = ()=>{
    const headers = {
        'Content-Type':'application/json',
    }
    return AxiosRequest("http://localhost:4000/applyers","GET", headers, {})
}
const GetContactDetails = ()=>{
    const headers = {
        'Content-Type':'application/json',
    }
    return AxiosRequest("http://localhost:4000/contact_form","GET", headers, {})
}

export { GetUserDetails,GetApplersDetails, GetContactDetails };
