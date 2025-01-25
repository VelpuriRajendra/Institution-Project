import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import registrationApi from "../services/registrationService.api";
import signupApi from "../services/signupService.api";

import LoginReducer from "../features/user/loginSlice";

const store = configureStore({
    reducer:{
        loginRed:LoginReducer,
        [registrationApi.reducerPath]: registrationApi.reducer,
        [signupApi.reducerPath]: signupApi.reducer,
        // [loginApi.reducerPath]:loginApi.reducer
    },
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(registrationApi.middleware, 
                                                                signupApi.middleware,
    )
})
setupListeners(store.dispatch)
export default store

