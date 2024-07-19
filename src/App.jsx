import { Fragment } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "shop", element: <Shop />},
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },  
        {  path: "shop/product/:id", element: <ProductDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];
  return (
    <>
      <Router>
        <Fragment>
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
