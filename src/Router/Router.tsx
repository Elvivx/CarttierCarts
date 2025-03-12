import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const Home = lazy(() => import("../Pages/Home"));
const Cart = lazy(() => import("../Pages/Cart"));
const Checkout = lazy(() => import("../Pages/Checkout"));
const ItemDescription = lazy(() => import("../Pages/ItemDescription"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDescription />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
