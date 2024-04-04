import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Home} from "./pages/index.js"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './pages/Aboutus.jsx';
import Activity from './pages/Activity.jsx';
import Contactus from './pages/Contactus.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Cricket from './pages/Cricket.jsx';
import Tabletennis from './pages/Tabletennis.jsx';
import Football from './pages/Football.jsx';
import Vollyball from './pages/Vollyball.jsx';
import Cricket1 from './pages/Cricket1.jsx';
import Tabletennis1 from './pages/Tabletennis1.jsx';
import Football1 from './pages/Football1.jsx';
import Vollyball1 from './pages/Vollyball1.jsx';
import Member from './pages/Member.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/",element: <Home />,},
      {path: "/About",element: <Aboutus />,},
      {path: "/Activity",element: <Activity />,},
      {path: "/Contact",element: <Contactus />,},
      {path: "/Login",element: <Login />,},
      {path: "/Signup",element: <Signup />,},
      {path: "/Cricket",element: <Cricket />,},
      {path: "/Football",element: <Football />,},
      {path: "/Tabletennis",element: <Tabletennis />,},
      {path: "/Vollyball",element: <Vollyball />,},
      {path: "/Cricket1",element: <Cricket1 />,},
      {path: "/Football1",element: <Football1 />,},
      {path: "/Tabletennis1",element: <Tabletennis1 />,},
      {path: "/Vollyball1",element: <Vollyball1 />,},
      {path: "/Member",element: <Member />,}      

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
