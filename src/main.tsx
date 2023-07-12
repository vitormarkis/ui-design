import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Root } from "./layouts/Root.tsx"
import { LandingBorderOriginal } from "./pages/original"
import { LandingBorder } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <></>,
      },
      {
        path: "/original/landing-border",
        element: <LandingBorderOriginal />,
      },
      {
        path: "/landing-border",
        element: <LandingBorder />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />)
