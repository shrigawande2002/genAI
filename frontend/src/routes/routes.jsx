import Layout from "../Layout";
import Home from "../pages/Home";
import Generate from "../pages/Generate";
// if App is really just a sign-in page
import App from "../App";
import Feed from "../pages/Feed";
const routes = [
  {
    path: "/",
    element: <Layout />,   // layout wrapper
    children: [
      {
        index: true,       // default route
        element: <Home />,
      },
      {
        path: "generate",
        element: <Generate />,
      },
      {
        path: "sign-in",
        element: <App />,
      }, {
        path:"feed",
        element: <Feed />
      }
    ],
  },
];

export default routes;
