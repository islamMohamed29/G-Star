import { Fragment, useEffect } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import ProtectedRoute from "./components/helpers/ProtectedRoute.jsx";
import ScrollToTop from "./components/helpers/ScrollToTop.jsx";
import { element } from "prop-types";
import CheckOut from "./Pages/CheckOut.jsx";
import LayoutWithoutFooter from "./Pages/LayoutWithoutFooter.jsx";

function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "shop", element: <Shop /> },
        {
          path: "login",
          element: (
            <ProtectedRoute isCanGo={true} redirectTo="/">
              <Login />
            </ProtectedRoute>
          ),
        },
        {
          path: "register",
          element: (
            <ProtectedRoute isCanGo={true} redirectTo="/">
              <Register />
            </ProtectedRoute>
          ),
        },

        { path: "shop/product/:id", element: <ProductDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/checkout",
      element: <LayoutWithoutFooter />,
      children: [{ path: "shopping-bag", element: <CheckOut /> }],
    },
  ];
  return (
    <>
      <Router>
        <Fragment>
          <ScrollToTop />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
