import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import registrationApi from "../services/registrationService.api";
import customerApi from "../services/customerService.api";

import LoginReducer from "../features/user/loginSlice";

const store = configureStore({
    reducer:{
        loginRed:LoginReducer,
        [registrationApi.reducerPath]: registrationApi.reducer,
        [customerApi.reducerPath]: customerApi.reducer,
        // [loginApi.reducerPath]:loginApi.reducer
    },
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(registrationApi.middleware, 
                                                                customerApi.middleware,
    )
})
setupListeners(store.dispatch)
export default store

