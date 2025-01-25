import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const registrationApi = createApi({
    reducerPath:"registrationApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/registers"}),
    endpoints:(builde)=>({
        getRegistersDetails:builde.query({
            query:()=>("/")
        }),
        addRegisterDetails:builde.mutation({
            query:(val)=>({
                url:"/",
                method:"POST",
                body:val
            })
        }),
        registerToCunstomer:builde.mutation({
            query:(customerDetails)=>({
                url:`/?mobileNumber=${customerDetails}`,
                method:"GET"
            })
        })
    })

})
export const {useGetRegistersDetailsQuery, 
                useAddRegisterDetailsMutation, 
                useLazyGetRegistersDetailsQuery,
                useRegisterToCunstomerMutation} = registrationApi
export default registrationApi