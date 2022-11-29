import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Shared/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
          }
      ]
    },
]);
  
export default router;