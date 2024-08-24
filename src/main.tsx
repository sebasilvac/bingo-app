import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Tablero, Bingo } from './pages';
import IntervalRender from './components/IntervalRender/IntervalRender';




const router = createBrowserRouter([
  {
    path: "/",
    element: <IntervalRender
      Component={Bingo}
    />,
    children: [
      {
        path: "tablero",
        element: <Tablero />,
      },
    ],
  },
  // {
  //   path: "tablero",
  //   element: <Tablero />,
  // },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
