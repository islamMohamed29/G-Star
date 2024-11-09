import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
import Layout from "./Pages/Layout";
import LayoutWithoutFooter from "./Pages/LayoutWithoutFooter.jsx";
import ProtectedRoute from "./components/helpers/ProtectedRoute.jsx";
import ScrollToTop from "./components/helpers/ScrollToTop.jsx";
import { MainLoading } from "./components/Loading/MainLoading.jsx";
import PaymentCallback from "./components/PaymentCallback.jsx";
import PaymentFailed from "./components/PaymentFailed.jsx";
import PaymentSuccess from "./components/PaymentSuccess.jsx";

const Home = lazy(() => import("./Pages/Home"));
const Shop = lazy(() => import("./Pages/Shop"));
const Login = lazy(() => import("./components/Auth/Login"));
const Register = lazy(() => import("./components/Auth/Register"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const CheckOut = lazy(() => import("./Pages/CheckOut"));
const SearchPage = lazy(() => import("./components/Search/SearchPage"));
function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "search", element: <SearchPage /> },
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
      path: "/payment-callback",
      element: <PaymentCallback />,
    },
    {
      path: "/payment-success",
      element: <PaymentSuccess />,
    },
    {
      path: "/payment-failed",
      element: <PaymentFailed />,
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
        <ScrollToTop />
        <Suspense fallback={<MainLoading />}>
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
        </Suspense>
      </Router>
    </>
  );
}

export default App;
