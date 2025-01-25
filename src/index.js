import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import HomeComp from './features/home/homeComp';
import LoginComp from './features/user/loginComp';
import SignupComp from './features/user/signupComp';
import RegistrationComp from './features/user/registrationComp';
import { Provider } from 'react-redux';
import store from './app/store';
import CustomerDashboard from './features/customer/customerDashboardComp';
import AdminDashboard from './features/admin/adminDashboardComp';
import CustomerPaymentDetails from './features/customer/customerPaymentDetails';
import Customerpayment from './features/customer/cunstomerPayment';
import CustomerProfile from './features/customer/customerProfile';
import AddCustomer from './features/admin/addCustomer';
import ViewCustomers from './features/admin/viewCustomers';
import ViewRegisters from './features/admin/viewRegisters';
import AdminProfile from './features/admin/adminProfile';

const route = createBrowserRouter([{
  path:"/",
  element:<HomeComp />
},
{
  path:"/login",
  element:<LoginComp />
},
{
  path:"/registration",
  element:<RegistrationComp/>
},
{
  path:"/signup",
  element:<SignupComp />
},
{
  path:"/customerDashboard",
  element:<CustomerDashboard />,
  children:[{
    path:"/customerDashboard/paymentDetails",
    element:<CustomerPaymentDetails />
  },{
    path:"/customerDashboard/payment",
    element:<Customerpayment/>
  },
  {
    path:"/customerDashboard/customerProfile",
    element:<CustomerProfile/>
  }
  ]
},
{
  path:"/adminDashboard",
  element:<AdminDashboard />,
  children:[{
    path:"/adminDashboard/adminProfile",
    element:<AdminProfile/>
  },
  {
    path:"/adminDashboard/viewRegisters",
    element:<ViewRegisters/>
  },
  {
    path:"/adminDashboard/viewCustomers",
    element:<ViewCustomers/>
  },
  {
    path:"/adminDashboard/addCustomer",
    element:<AddCustomer/>
  }
  ]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={route}/>
  </Provider>
  
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
