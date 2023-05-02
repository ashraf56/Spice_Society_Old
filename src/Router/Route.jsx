import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Blog from "../component/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
{
    path:'/',
    element:<Home></Home>
},
{
    path:'/blog',
    element:<Blog/>
},
{
  path:'/chef/:id',
  element:<div>This is cte</div>
}

      ]
    },
  ]);

  export default router;