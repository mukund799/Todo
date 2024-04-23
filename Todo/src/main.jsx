import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './layout.jsx'
import Information from './component/Information.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "Todo",
    element:<Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "info",
        element: <Information />,
      }
    ]
  },
  {
    path: "/button",
    element: <div> i am using this bcz of u</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
