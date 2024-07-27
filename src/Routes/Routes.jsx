import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../errorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyProfile from "../pages/MyProfile/MyProfile";
import PrivateRoute from "../providers/PrivateRoute";
import PeopleProfile from "../pages/PeopleProfile/PeopleProfile";
import UpdatePost from "../components/UpdatePost";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: ()=>fetch('http://localhost:5000/comment')
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/profile',
          element: <PrivateRoute><MyProfile /></PrivateRoute>
        },
        {
          path: '/peopleprofile/:id',
          element: <PrivateRoute><PeopleProfile /></PrivateRoute>,
        },
        {
          path: '/updatePost/:id',
          element: <UpdatePost />,
        }
      ]
    },
  ]);

export default router;