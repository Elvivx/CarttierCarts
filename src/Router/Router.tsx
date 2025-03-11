import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const Home = lazy(() => import("../Pages/Home"));
const Cart = lazy(() => import("../Pages/Cart"));
// const Shop = lazy(() => import("../Pages/Shop"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={About} />
      <Route path="/contact" element={Contact} /> */}
          {/* <Route path="/shoppingItem" element={ShoppingItem} /> */}

          {/* <Route path="/itemDescription" element={ItemDescription} />
        <Route path="/stars" element={Stars} />
        <Route path="/cartItems" element={CartItems} /> */}
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
