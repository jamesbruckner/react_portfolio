import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
// import Navigation from './components/Navigation';
import About from "./components/About";
import PortfolioPage from "./components/PortfolioPage";
import Contact from "./components/Contact";
import Resume from "./components/Resume"
// import { Link } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: "Error! Surprise!",
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/portfoliopage",
                element: <PortfolioPage />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);