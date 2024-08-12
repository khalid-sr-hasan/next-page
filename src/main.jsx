import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Books from "./components/Books/Books.jsx";
import About from "./components/About/About.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import Loader from "./components/Loader/Loader.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/books",
                element: <Books></Books>,
                loader: () => fetch("https://api.itbook.store/1.0/new"),
            },
            {
                path: "/book/:bookId",
                element: <BookDetails></BookDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://api.itbook.store/1.0/books/${params.bookId}`
                    ),
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/loader",
                element: <Loader></Loader>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
