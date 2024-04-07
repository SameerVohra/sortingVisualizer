import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // Assuming App.tsx renders the Header component
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BubbleSort from "./components/Sorting/BubbleSort.tsx";

import InsertionSort from "./components/Sorting/InsertionSort.tsx";
import MergeSort from "./components/Sorting/MergeSort.tsx";
import QuickSort from "./components/Sorting/QuickSort.tsx";
import SelectionSort from "./components/Sorting/SelectionSort.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BubbleSort />,
      },
      {
        path: "/bubblesort",
        element: <BubbleSort />,
      },
      {
        path: "/insertionsort",
        element: <InsertionSort />,
      },
      {
        path: "/mergesort",
        element: <MergeSort />,
      },
      {
        path: "/quicksort",
        element: <QuickSort />,
      },
      {
        path: "/selectionsort",
        element: <SelectionSort />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
