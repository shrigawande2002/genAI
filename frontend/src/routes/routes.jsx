import App from "../App"
import Generate from "../pages/Generate"
import Home from "../pages/Home"

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/sign-in',
        element: <App />,
    },
    {
        path: '/generate',
        element: <Generate />,
    }
   
]

export default routes