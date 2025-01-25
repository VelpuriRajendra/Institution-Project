import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const signupApi = createApi({
    reducerPath:"signupReducer",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:4000/customers"}),
    endpoints:(builde)=>({
        getSignup:builde.query({
            query:()=>(`/`)
        }),
        getlogin:builde.query({
            query:(data)=>(`/?mobileNumber=${data.mobileNumber}&password=${data.password}&role=${data.role}`)
        }),
        addRegisterToCustomer:builde.mutation({
            query:(signupDetails)=>({
                url:"/",
                method:"POST",
                body:signupDetails
            })
        }),
        addCustomerDetails:builde.mutation({
            query:(customerDetails)=>({
                url:"/"+customerDetails?.id,
                method:"PATCH",
                body:customerDetails
            })
        })  
    })
})
export const {useAddRegisterToCustomerMutation, 
                useAddCustomerDetailsMutation,
                useGetSignupQuery,
                useLazyGetSignupQuery,
                useLazyGetloginQuery} = signupApi
export default signupApi