import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Blog from "../component/Blog";
import DetailChef from "../component/DetailChef";

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
  element:<DetailChef></DetailChef>,
  loader: ({params})=> fetch(`https://b7a10-chef-recipe-hunter-server-side-ashraf56.vercel.app/chef/${params.id}`)
}

      ]
    },
  ]);

  export default router;