import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginApi = createApi({
    reducerPath:"loginReducer",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:4000/customers"}),
    endpoints:(builde)=>({
        getlogin:builde.query({
            query:(data)=>(`/?mobileNumber=${data.mobileNumber}&password=${data.password}&role=${data.role}`)
        })
    })
})
export const {useGetloginQuery, useLazyGetloginQuery} = loginApi
export default loginApi