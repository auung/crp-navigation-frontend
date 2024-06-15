import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MapContextProvider from "./contexts/MapContext";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Traffic from "./routes/traffic";
import Navigation from "./routes/navigation";
import Visualize from "./routes/visualize";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Navigate to="traffic" replace />
      },
      {
        path: "traffic",
        element: <Traffic />,
      },
      {
        path: "navigation",
        element: <Navigation />,
      },
      {
        path: "visualize",
        element: <Visualize />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MapContextProvider>
      <RouterProvider router={router} />
    </MapContextProvider>
  // </React.StrictMode>
  ,
)
