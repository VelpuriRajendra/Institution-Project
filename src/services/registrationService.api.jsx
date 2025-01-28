import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const registrationApi = createApi({
    reducerPath:"registrationApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/registers"}),
    endpoints:(builde)=>({
        getRegistersDetails:builde.query({
            query:()=>("/")
        }),
        getThroughMobileNumber:builde.query({
            query:(data)=>(`/?mobileNumber=${data}`)
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
                url:`/?mobileNumber=${customerDetails.mobileNumber}`,
                method:"GET"
            })
        })
    })

})
export const {useGetRegistersDetailsQuery,
                useGetThroughMobileNumberQuery,
                useLazyGetThroughMobileNumberQuery,
                useAddRegisterDetailsMutation, 
                useLazyGetRegistersDetailsQuery,
                useRegisterToCunstomerMutation} = registrationApi
export default registrationApi