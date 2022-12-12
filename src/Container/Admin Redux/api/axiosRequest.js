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

const GetApiDetails = ()=>{
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

export { GetApiDetails,GetApplersDetails };
