import { Navigate, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loading from "components/Common/Loading/Loading";

// import Address from "features/users/account/pages/Address";
// import AllProduct from "features/users/products/components/ProductList";
// import Bill from "features/users/products/components/Bill";
// import Loading from "components/Common/Loading/Loading";
// import Login from "pages/Auth/Login";
// import OrderSuccess from "pages/OrderSuccess/OrderSuccess";
// import Page404 from "components/Common/NotFound/Page404";
// import Password from "features/users/account/pages/Password";
// import ProdDetail from "pages/ProductsDetail/ProdDetail";
// import Profile from "features/users/account/pages/Profile";
// import Register from "pages/Auth/Register";
// import Tracking from "pages/Tracking/Tracking";
// import YourOrders from "features/users/account/pages/Orders";

const Home = lazy(() => import("pages/Home/HomePage"));
// const FoodPage = lazy(() => import("pages/ProductsList/Products"));
// const Checkout = lazy(() => import("pages/Checkout/CheckoutPage"));
// const Account = lazy(() => import("components/Layouts/Account/Account"));
// const Dashboard = lazy(() => import("features/admin/pages/Dashboard"));

export default function PublicRoutes({ isAdmin }) {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="home" />,
    },

    {
      path: "home",
      element: (
        <Suspense fallback={<Loading height="100vh" />}>
          <Home />
        </Suspense>
      ),
    },

    // {
    //   path: "product",
    //   element: (
    //     <Suspense fallback={<Loading height="100vh" />}>
    //       <FoodPage />
    //     </Suspense>
    //   ),
    //   children: [
    //     {
    //       path: "",
    //       element: <Navigate to="food" />,
    //     },
    //     {
    //       path: "food",
    //       element: <AllProduct />,
    //     },
    //     {
    //       path: ":id",
    //       element: <ProdDetail />,
    //     },
    //   ],
    // },

    // {
    //   path: "user",
    //   element: (
    //     <Suspense fallback={<Loading height="100vh" />}>
    //       <Account />
    //     </Suspense>
    //   ),
    //   children: [
    //     {
    //       path: "",
    //       element: <Navigate to="profile" />,
    //     },
    //     {
    //       path: "profile",
    //       element: <Profile />,
    //     },
    //     {
    //       path: "orders",
    //       element: <YourOrders />,
    //     },

    //     {
    //       path: "address",
    //       element: <Address />,
    //     },
    //     {
    //       path: "password",
    //       element: <Password />,
    //     },
    //   ],
    // },

    // // {
    // //   path: "dashboard",
    // //   element: isAdmin ? (
    // //     <Suspense fallback={<Loading height="100%" />}>
    // //       <Dashboard />
    // //     </Suspense>
    // //   ) : (
    // //     <Navigate to="/home" replace />
    // //   ),
    // //   children: [
    // //     {
    // //       path: "",
    // //       element: <Navigate to="app" />,
    // //     },
    // //     {
    // //       path: "app",
    // //       element: <DashboardApp />,
    // //     },
    // //     {
    // //       path: "user",
    // //       element: <User />,
    // //     },
    // //     {
    // //       path: "products",
    // //       element: <Products />,
    // //     },
    // //     {
    // //       path: "orders",
    // //       element: <Orders />,
    // //     },
    // //   ],
    // // },

    // {
    //   path: "success",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <OrderSuccess />
    //     </Suspense>
    //   ),
    // },

    // {
    //   path: "checkout",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <Checkout />
    //     </Suspense>
    //   ),
    // },

    // {
    //   path: "bill",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <Bill />
    //     </Suspense>
    //   ),
    // },

    // {
    //   path: "login",
    //   element: <Login />,
    // },

    // {
    //   path: "register",
    //   element: <Register />,
    // },

    // {
    //   path: "tracking",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <Tracking />
    //     </Suspense>
    //   ),
    // },

    // {
    //   path: "*",
    //   element: <Page404 />,
    // },
  ]);
}
