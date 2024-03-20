import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx';
import Course from './components/CoursePage/Course.jsx';
import Error from './components/Error/Error.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/course' element={<Course />} />
      <Route path='*' element={<Error/>} />

    </Route>


  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);