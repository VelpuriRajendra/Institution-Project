import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const customerApi = createApi({
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
        }) ,
        updatePayment:builde.mutation({
            query:({paymentDetails, id})=>({
                url:"/"+id,
                method:"PATCH",
                body:paymentDetails
            })
        })  
    })
})
export const {useAddRegisterToCustomerMutation, 
                useUpdatePaymentMutation,
                useAddCustomerDetailsMutation,
                useGetSignupQuery,
                useLazyGetSignupQuery,
                useLazyGetloginQuery} = customerApi
export default customerApi