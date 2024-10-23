import { lazy } from "react";
import AddProduct from "../../views/admin/AddProduct";
import Products from "../../views/admin/Products";
const PaymentRequest = lazy(() => import("./../../views/admin/PaymentRequest"));
const EditProduct = lazy(() => import("./../../views/admin/EditProduct"));
const OrderDetails = lazy(() => import("./../../views/admin/OrderDetails"));
const AdminDashboard = lazy(() => import("./../../views/admin/AdminDashboard"));
const Chat = lazy(() => import("./../../views/admin/Chat"));
const Orders = lazy(() => import("./../../views/admin/Orders"));
const Category = lazy(() => import("./../../views/admin/Category"));

export const adminRoute = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "/admin/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "/admin/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "/admin/add-product",
    element: <AddProduct />,
    role: "admin",
  },
  {
    path: "/admin/all-products",
    element: <Products />,
    role: "admin",
  },
  {
    path: "/admin/edit-product/:productID",
    element: <EditProduct />,
    role: "admin",
  },
  {
    path: "/admin/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "/admin/chat",
    element: <Chat />,
    role: "admin",
  },
  {
    path: "/admin/orders/details/:orderID",
    element: <OrderDetails />,
    role: "admin",
  },
];
