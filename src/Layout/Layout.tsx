import { useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import Footer from "../Pages/Footer";
import Nav from "../Pages/Nav";
import "../assets/App.scss";
import { Outlet } from "react-router-dom";

// import { Link } from "react-router-dom"
function Layout() {
  const [cart, setCart] = useState<string[]>();
  const [fav, setFav] = useState<boolean>(false);
  const [displayHero, setDisplayHero] = useState(true);
  const [displayCart, setDisplayCart] = useState(false);
  const [displayCheckout, setDisplayCheckout] = useState(false);
  const [displayItemDesc, setDisplayItemDesc] = useState(false);
  const home = () => {
    setDisplayCart(false);
    setDisplayCheckout(false);
    setDisplayHero(true);
    setDisplayItemDesc(false);
  };
  const navToggle = () => {
    const navs = document.querySelector(".nav");
    navs.classList.toggle("showNav");
  };
  const cartToggle = () => {
    console.log("work");
    setDisplayCart(true);
    setDisplayCheckout(false);
    setDisplayHero(false);
    setDisplayItemDesc(false);
  };
  const checkoutToggle = () => {
    console.log("work");
    setDisplayCart(false);
    setDisplayCheckout(true);
    setDisplayHero(false);
    setDisplayItemDesc(false);
  };
  const itemDescToggle = () => {
    console.log("work");
    setDisplayCart(false);
    setDisplayCheckout(false);
    setDisplayHero(false);
    setDisplayItemDesc(true);
  };
  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.parentElement.parentElement.parentElement);
    setCart([
      ...cart,
      e.currentTarget.parentElement.parentElement.parentElement,
    ]);
  };
  const addFav = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget);
    // setFav([...fav, e.currentTarget.parentElement.parentElement.parentElement])
    setFav(!fav);
  };
  useEffect(() => {
    console.log(fav);
  }, [cart, fav]);
  return (
    <AppContext>
      <section className="container">
        <section className="top-contact">
          <div className="contents">
            <span className="call">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9745053,6.25438069 C11.5604671,6.90391332 11.3746817,7.63976469 10.8565778,8.33797195 C10.7337406,8.50350982 10.5921521,8.6666145 10.4211441,8.84634226 C10.3390625,8.93260918 10.2750591,8.99748744 10.141183,9.13149508 C9.83714115,9.43583583 9.58155513,9.69156272 9.37441088,9.89868984 C9.27396046,9.99913195 9.95978257,11.3696024 11.2907766,12.7019048 C12.6210476,14.0334833 13.9914431,14.7197765 14.0923663,14.6187976 L14.8586096,13.852132 C15.2805737,13.4297532 15.5040355,13.2259664 15.8111037,13.0245121 C16.4494656,12.6057102 17.1457524,12.4919023 17.7329975,13.0170075 C19.6503895,14.3885354 20.7354185,15.2301771 21.2669798,15.782495 C22.303783,16.8597835 22.1679037,18.5180455 21.2728679,19.4640525 C20.9625009,19.7920945 20.5689704,20.1858419 20.1041752,20.6339203 C17.2926326,23.4470127 11.3589665,21.7350681 6.81145433,17.1830859 C2.26291105,12.6300716 0.5518801,6.69583839 3.35753082,3.88868121 C3.86122573,3.37707043 4.02729858,3.211082 4.51785466,2.72771931 C5.43117982,1.82778693 7.16594962,1.68687606 8.22050841,2.7286095 C8.77521019,3.27656509 9.65955176,4.41440275 10.9745053,6.25438069 Z M16.2721965,15.266193 L15.5058008,16.0330112 C14.203091,17.336439 11.9845452,16.2253927 9.8770373,14.1158132 C7.76808363,12.0047866 6.65827534,9.78706944 7.96142436,8.48402821 C8.16828995,8.27717972 8.42363443,8.0216945 8.72744369,7.71758662 C8.8500234,7.59488642 8.90609452,7.5380489 8.97339653,7.46731514 C9.06509326,7.37094278 9.1404434,7.28630078 9.20077275,7.211402 C8.03540499,5.58806095 7.24320651,4.57370892 6.8161396,4.15183592 C6.59558525,3.93396391 6.1017247,3.97407893 5.9204189,4.1527261 C5.43686641,4.6291879 5.27792422,4.78804929 4.77626041,5.29755675 C2.9719475,7.10286418 4.35321008,11.8933879 8.22519368,15.7691775 C12.0959638,19.6437524 16.8857659,21.0256764 18.7038097,19.2068681 C19.161375,18.7655298 19.5342402,18.3924591 19.8212354,18.08912 C20.0286173,17.8699279 20.0656783,17.4176384 19.8271235,17.1697684 C19.4297888,16.7569185 18.4570205,15.9984643 16.777362,14.7922626 C16.6549304,14.8908077 16.5044234,15.033738 16.2721965,15.266193 Z"
                  fillRule="evenodd"
                />
              </svg>
              09063763861
            </span>
            <span>Get 50% off on selected items | Shop Now</span>
            <span className="lang-locate">
              <select name="language" id="language">
                <option value="Language">Language</option>
              </select>

              <select name="location" id="location">
                <option value="Location">Location</option>
              </select>
            </span>
          </div>
        </section>

        <section className="main contents">
          <Nav />
          <Outlet />
        </section>

        <Footer />
      </section>
    </AppContext>
  );
}
export default Layout;
