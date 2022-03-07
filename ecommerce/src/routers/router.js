import Home from "./../pages/Home.jsx";
import Shop from "./../pages/Shop.jsx";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/shop/*", element: <Shop /> },
];

export default routes;
