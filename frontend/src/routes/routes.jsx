import Layout from "../Layout";
import Home from "../pages/Home";
import Generate from "../pages/Generate";
// if App is really just a sign-in page
import App from "../App";
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
      },
    ],
  },
];

export default routes;
