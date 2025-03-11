import { lazy } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

// const Home = lazy(() => import("../Pages/Home"));
const Cart = lazy(() => import("../Pages/Cart"));
const Shop = lazy(() => import("../Pages/Shop"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" component={Home} /> */}
        {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
        {/* <Route path="/shoppingItem" component={ShoppingItem} /> */}

        {/*  <Route path="/itemDescription" component={ItemDescription} />
        <Route path="/stars" component={Stars} />
        <Route path="/cartItems" component={CartItems} />
        <Route path="/cart" component={Cart} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
