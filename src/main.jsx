import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    childrem: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'aboutMe',
        element: <AboutMe />
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router} />

 
//  <React.StrictMode>
//     <App />
//   </React.StrictMode>,
);
