import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../errorPage";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      chilfren: [
        {
          path: '/',
          element: <Home />
        }
        
      ]
    },
  ]);

export default router;