import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes";
import { PrivateRoute } from "./routes/PrivateRoute";
import {
  Landing,
  Home,
  Profile,
  SignIn,
  SignUp,
  PostDetails,
  Admin,
} from "./pages/export";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoutes />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/post/:id",
        element: <PostDetails />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
