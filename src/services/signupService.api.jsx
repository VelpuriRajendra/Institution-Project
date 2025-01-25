import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const signupApi = createApi({
    reducerPath:"signupReducer",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:4000/customers"}),
    endpoints:(builde)=>({
        getSignup:builde.query({
            query:()=>(`/`)
        }),
        addRegisterToCustomer:builde.mutation({
            query:(signupDetails)=>({
                url:"/",
                method:"POST",
                body:signupDetails
            })
        }),
        addCustomerDetails:builde.mutation({
            query:(passwordDetails)=>({
                url:`?mobileNumber=${passwordDetails.mobileNumber}`,
                method:"PATCH",
                body:passwordDetails
            })
        })  
    })
})
export const {useAddRegisterToCustomerMutation, 
     
                useAddCustomerDetailsMutation,
                useGetSignupQuery,
                useLazyGetSignupQuery} = signupApi
export default signupApi