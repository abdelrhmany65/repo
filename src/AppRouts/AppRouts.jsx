import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../components/layout/Layout ';
import Error from '../pages/Error';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import OurTeam from '../pages/OurTeam';
import Projects from '../pages/Projects';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />, 
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "Services",
          element: <Services />,
        },
        {
          path: "Projects",
          element: <Projects />,
        },
        {
          path: "ourteam",
          element: <OurTeam />,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },  
      ],
    },
  ]);



const AppRouts = () => {
    return <RouterProvider router={router} />;
}

export default AppRouts