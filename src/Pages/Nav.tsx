// appwrite login
import { NavLink } from "react-router-dom";
import { account, OAuthProvider } from "../Helper/appwrite";
const Nav = () => {
  const navToggle = () => {
    const navs = document.querySelector(".nav");
    if (navs) {
      navs.classList.toggle("showNav");
    }
  };
  const getUser = async () => {
    login();
    const user = await account.get();
    console.log(user);
  };

  const login = async () => {
    account.createOAuth2Session(
      OAuthProvider.GOOGLE,
      "http://localhost:5174/",
      "http://localhost:51734/"
    );
  };

  return (
    <nav className="navs">
      <div className="nav-left">
        <NavLink to="/">
          <div className="logo">
            <h1>Carttier</h1>
            <svg
              id="Layer_1"
              version="1.1"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g id="fill">
                  <path
                    className="st0"
                    d="M95.6,47.6c-1.3-8.2-2.7-16.4-4.1-24.6c-1-5.9-2.4-12.4-9.9-11.7c-3.3,0.3-6.5,2.2-9.5,3.5    c-3.8,1.7-7.6,3.4-11.4,5.2c-14.1,6.6-27.9,13.9-41.3,21.9c-5.7,3.4-14,8.2-15.9,15.1C1.7,63.3,6.3,67.7,11.7,70    c2.6,2.7,5.3,5.1,7.3,7.1l10.7,11.2c2.6,2.7,5.3,6.8,9.4,7c4.2,0.2,8.7-4.3,11.8-6.5l5.3-3.6l16-8.3c6.7-3.4,14-6.4,20.3-10.6    C98.9,61.9,96.7,54.1,95.6,47.6z"
                  />
                  <path
                    className="st1"
                    d="M47.2,34.4c-3-7.8-6.9-15.3-11.4-22.3c-3.5-5.2-9.6-13.1-16.5-7.8c-3.9,3-2,8.8,1.4,9.8    c5.1,9.1,11.4,17.7,17,26.5c3.2,4.9,10.5,1.5,9.8-3.2C47.7,36.4,47.6,35.3,47.2,34.4z"
                  />
                </g>
                <g id="line_copy">
                  <path
                    className="st2"
                    d="M31.6,40.3l3.7-1.9c-0.1-0.1-0.2-0.3-0.3-0.4c-1.2,0.7-2.5,1.3-3.7,2C31.5,40,31.6,40.2,31.6,40.3z"
                  />
                  <path
                    className="st2"
                    d="M93,57.6c-1.6-11.5-3.9-22.8-6.8-34c-10.3,4.2-20.4,8.8-30.3,13.8c0.1,0.8,0.1,1.7,0.1,2.6    c0,1.2-0.1,2.5-0.4,3.7c-0.4,1.4-1,2.6-1.9,3.7c-1.2,1.5-2.8,2.7-4.7,3.3c-1.2,0.4-2.5,0.7-3.8,0.9c-0.7,0.1-1.3,0.1-2,0.1    c-2.9,0-5.8-0.9-8.2-2.5c-0.1-0.1-0.3-0.2-0.4-0.3c-8.5,5-16.9,10.3-25,16c1.6,1.8,3.5,3.6,5.2,5.4c6.7,7.4,13.6,14.7,20.5,21.8    l-1,1l1-1c0.5,0.5,1,1,1.6,1.5c0.5,0.4,1,0.7,1.5,0.8c0.3,0.1,0.5,0.1,0.8,0.1c0.8,0,1.5-0.2,2.2-0.5c0.8-0.4,1.6-0.8,2.4-1.3    l46.7-29c0.8-0.4,1.4-0.9,2-1.6c0.4-0.7,0.6-1.5,0.6-2.4C93.2,59.1,93.1,58.4,93,57.6L93,57.6z M87.3,49.9    c-0.1,0.8-0.8,1.3-1.6,1.2l-5.3-0.8l-1,10.8l0.1,0c0.8,0.1,1.3,0.9,1.1,1.6c-0.1,0.8-0.9,1.3-1.6,1.1h0c-0.4,0.7-1.3,0.9-1.9,0.5    c-0.3-0.2-0.6-0.5-0.6-0.9L67,61.7c-0.1,2.9-0.2,5.9-0.2,8.8l0,0c0,0.8-0.6,1.4-1.4,1.4c-0.2,0-0.5-0.1-0.7-0.2    c0.6,0.5,0.8,1.3,0.3,2c-0.3,0.4-0.9,0.7-1.4,0.6l-9.1-1.7c-0.4,2.5-0.7,4.9-1.1,7.4l0,0c-0.1,0.8-0.8,1.3-1.6,1.2    c-0.8-0.1-1.3-0.8-1.2-1.6l1.1-7.5l-10.6-1.9c-0.2,2.9-0.4,5.8-0.7,8.7c2.9,0.5,5.8,1,8.7,1.4c0.8,0.1,1.3,0.9,1.2,1.6    c-0.1,0.8-0.8,1.3-1.6,1.2c-2.8-0.4-5.6-0.9-8.4-1.4c0,0.3,0,0.5-0.1,0.8l0,0c-0.1,0.8-0.7,1.4-1.5,1.3c-0.8-0.1-1.4-0.7-1.3-1.5    c0,0,0,0,0,0c0-0.3,0.1-0.7,0.1-1c-1.5-0.3-3.1-0.5-4.6-0.8l0,0c-0.8-0.1-1.3-0.9-1.2-1.6c0.1-0.8,0.9-1.3,1.6-1.2    c1.5,0.2,2.9,0.5,4.4,0.7c0.2-2.9,0.4-5.8,0.7-8.7l-8.8-1.6c-0.1,1.6-0.2,3.2-0.3,4.7l0,0c0,0.8-0.7,1.4-1.5,1.4    c-0.8,0-1.4-0.7-1.4-1.5c0.1-1.7,0.2-3.4,0.3-5.1l-4.1-0.7l0,0c-0.8-0.1-1.3-0.9-1.1-1.6c0.1-0.8,0.9-1.3,1.6-1.1l3.8,0.7    c0.2-1.7,0.4-3.4,0.7-5.1c0.1-0.8,0.9-1.3,1.6-1.2c0.8,0.1,1.3,0.8,1.2,1.6c-0.3,1.7-0.5,3.4-0.7,5.2l8.7,1.6    c0.3-3.3,0.5-6.6,0.8-9.8c0.1-0.8,0.7-1.4,1.5-1.3c0.8,0.1,1.4,0.7,1.3,1.5c0,0,0,0,0,0c-0.3,3.4-0.5,6.8-0.8,10.1l10.8,2    c0.5-3.4,1-6.7,1.5-10.1l-8.2-1.5l0,0c-0.8-0.1-1.3-0.9-1.2-1.6c0.1-0.8,0.9-1.3,1.6-1.2c0,0,0,0,0.1,0l8.1,1.5l0.9-5.9    c0.1-0.8,0.8-1.3,1.6-1.2c0.8,0.1,1.3,0.8,1.2,1.6l-0.9,6l7.6,1.4c0.2-3.4,0.5-6.9,1-10.3L61,47.4l0,0c-0.8-0.1-1.3-0.8-1.2-1.6    c0.1-0.8,0.8-1.3,1.6-1.2l0,0l4.3,0.6c0.3-2.2,0.6-4.4,1-6.6c0.1-0.8,0.8-1.3,1.6-1.2c0.8,0.1,1.3,0.8,1.2,1.6c0,0,0,0,0,0.1    c-0.4,2.2-0.7,4.4-1,6.6l9.4,1.4l0.9-10c0.1-0.8,0.8-1.4,1.5-1.3c0.8,0.1,1.4,0.8,1.3,1.5c-0.3,3.4-0.6,6.8-1,10.2l5.4,0.8    C86.9,48.4,87.4,49.1,87.3,49.9C87.3,49.9,87.3,49.9,87.3,49.9z"
                  />
                  <path
                    className="st2"
                    d="M53.5,28.9c0.9,1.7,1.6,3.6,2,5.5c9.8-5,19.8-9.5,30-13.7c0-0.1,0-0.2-0.1-0.3c-0.2-0.7-0.4-1.4-0.7-2.1    c-0.2-0.5-0.6-1-1-1.4c-0.5-0.4-1.2-0.6-1.8-0.6c-1.5,0.1-2.9,0.5-4.3,1.2c-8.1,3.6-16.2,7.2-24.2,11.1    C53.4,28.8,53.4,28.8,53.5,28.9z"
                  />
                  <path
                    className="st2"
                    d="M56.4,59.8c-0.5,3.4-1,6.7-1.5,10.1l9.2,1.7c0.1,0,0.3,0.1,0.4,0.2C64.2,71.4,64,71,64,70.5    c0-3.1,0.1-6.2,0.2-9.3L56.4,59.8z"
                  />
                  <path
                    className="st2"
                    d="M50.8,29.9c-1.6,0.8-3.3,1.6-4.9,2.4c0.1,0.1,0.2,0.3,0.3,0.4l4.7-2.5C50.9,30.1,50.9,30,50.8,29.9z"
                  />
                  <path
                    className="st2"
                    d="M67.2,58.9l9.4,1.7c0.3-3.6,0.7-7.1,1-10.7l-9.5-1.4C67.7,51.9,67.4,55.4,67.2,58.9z"
                  />
                  <path
                    className="st2"
                    d="M7.9,62.8c8-5.5,16.2-10.8,24.6-15.7c-1.5-1.6-2.7-3.6-3.4-5.7l0,0c0,0,0-0.1,0-0.1    c-6.7,3.8-13.1,7.9-19.4,12.4c-1.1,0.7-2,1.6-2.7,2.7c-0.5,0.7-0.7,1.5-0.7,2.3c0,0.9,0.3,1.8,0.7,2.6C7.2,61.8,7.5,62.3,7.9,62.8    z"
                  />
                  <polygon className="st2" points="18,8.2 18,8.2 18,8.2   " />
                  <path d="M95.8,57.2c-1.8-12.6-4.4-25.1-7.7-37.4c-0.2-0.9-0.5-1.7-0.9-2.6c-0.4-1-1-1.8-1.8-2.4c-1-0.8-2.3-1.2-3.6-1.2    c-1.9,0.1-3.7,0.6-5.4,1.5C65.6,19.9,54.8,24.7,44.2,30c-4.3-6.2-8.3-12.7-11.9-19.3c-0.8-1.5-1.6-2.9-2.6-4.3    c-0.4-0.6-0.9-1.1-1.5-1.6c-0.6-0.5-1.3-0.8-2-0.9c-0.4-0.1-0.8-0.1-1.2-0.1c-1.4,0-2.8,0.4-4.1,1.2c-1.3,0.7-2.3,1.8-3,3.2l0,0    c-0.3,0.7-0.5,1.4-0.5,2.1c0,0.7,0.1,1.3,0.4,2c0.5,1.2,1.1,2.3,1.9,3.4c1.3,1.8,3,3.9,5.1,6.7c2.6,3.4,5,7,7.2,10.7    c0.5,0.9,1,1.7,1.5,2.5c-8.9,4.7-17.4,10-25.6,15.9c-1.4,0.9-2.6,2.1-3.5,3.5c-0.7,1.1-1.1,2.5-1.1,3.8c0,1.4,0.4,2.7,1.1,3.9    c1.1,1.9,2.4,3.6,3.9,5.1c1.5,1.6,3.1,3.1,4.4,4.6c6.7,7.4,13.6,14.7,20.6,21.9l0,0c0.6,0.6,1.2,1.2,1.9,1.8    c0.8,0.6,1.6,1.1,2.6,1.3c0.5,0.1,1,0.2,1.5,0.2c1.1,0,2.3-0.3,3.3-0.8c1-0.4,1.9-0.9,2.8-1.5l46.7-29c1.1-0.6,2-1.4,2.8-2.4    c0.8-1.2,1.1-2.6,1.1-4C96,59,96,58.1,95.8,57.2L95.8,57.2z M77.6,17.6c1.3-0.7,2.8-1.1,4.3-1.2c0.7,0,1.3,0.2,1.8,0.6    c0.4,0.4,0.8,0.8,1,1.4c0.3,0.7,0.5,1.4,0.7,2.1c0,0.1,0,0.2,0.1,0.3c-10.2,4.1-20.2,8.7-30,13.7c-0.4-1.9-1.1-3.8-2-5.5    c0-0.1-0.1-0.1-0.1-0.2C61.3,24.9,69.4,21.3,77.6,17.6z M21.2,12.6c-0.3-0.4-0.5-0.9-0.7-1.4c-0.1-0.3-0.2-0.7-0.2-1    c0-0.3,0.1-0.6,0.2-0.9l0,0c0.4-0.8,1-1.5,1.8-1.9C23.1,6.9,24,6.7,25,6.6c0.2,0,0.4,0,0.7,0.1c0.3,0.1,0.7,0.2,0.9,0.4    c0.6,0.5,1.1,1.1,1.5,1.7c0.5,0.8,1.1,1.9,1.8,3.2c3,5.4,8,14.2,13.2,21.1c0.6,0.8,1.2,1.6,1.8,2.5c0.4,0.6,0.6,1.3,0.7,2    c0,0.2,0,0.3-0.1,0.5c-0.2,0.7-0.7,1.3-1.3,1.7c-0.6,0.5-1.4,0.7-2.1,0.8h0c-0.5,0-1.1-0.2-1.5-0.5c-1.1-0.9-2-2-2.7-3.2    c-1-1.5-2.1-3.4-3.3-5.6c-3.1-5.2-6.6-10.1-10.4-14.8C23.1,15.4,22.1,14,21.2,12.6z M35.3,38.4c0.4,0.6,0.8,1.2,1.2,1.8    c0.7,0.9,1.5,1.7,2.4,2.4c0.9,0.7,2,1,3.1,1h0c1.4,0,2.7-0.5,3.8-1.3c1.1-0.8,2-1.9,2.4-3.3c0.1-0.4,0.2-0.8,0.2-1.2    c0-1.2-0.4-2.4-1.1-3.5c-0.3-0.6-0.7-1.1-1.1-1.6c-0.1-0.1-0.2-0.3-0.3-0.4c1.6-0.8,3.3-1.6,4.9-2.4c0,0.1,0.1,0.2,0.1,0.3v0    c1.1,2.1,1.8,4.3,2.1,6.7c0.1,1,0.2,2.1,0.2,3.1c0,1-0.1,2-0.3,2.9c-0.3,1-0.7,1.9-1.3,2.7c-0.9,1.1-2.1,2-3.4,2.4    c-1,0.4-2.1,0.6-3.1,0.7c-0.5,0.1-1.1,0.1-1.6,0.1c-2.4,0-4.7-0.7-6.7-2c-2.3-1.6-4.1-3.8-5-6.5c0-0.1-0.1-0.1-0.1-0.2    c-0.1-0.1-0.2-0.2-0.3-0.3c1.2-0.7,2.5-1.4,3.7-2C35.2,38.1,35.3,38.2,35.3,38.4z M6.9,56.3c0.7-1.1,1.7-2,2.7-2.7    c6.2-4.5,12.7-8.6,19.4-12.4c0,0,0,0.1,0,0.1l0,0c0.7,2.1,1.9,4,3.4,5.7C24.1,52,15.9,57.3,7.9,62.8c-0.3-0.5-0.7-1-0.9-1.5    c-0.5-0.8-0.7-1.7-0.7-2.6C6.2,57.8,6.5,57,6.9,56.3z M92.6,62.2c-0.5,0.7-1.2,1.2-2,1.6l-46.7,29c-0.8,0.5-1.6,0.9-2.4,1.3    c-0.7,0.3-1.4,0.5-2.2,0.5c-0.3,0-0.5,0-0.8-0.1c-0.6-0.2-1.1-0.4-1.5-0.8c-0.6-0.5-1.1-1-1.6-1.5l-1,1l1-1    c-7-7.2-13.8-14.4-20.5-21.8c-1.7-1.8-3.6-3.6-5.2-5.4c8.2-5.6,16.5-11,25-16c0.1,0.1,0.3,0.2,0.4,0.3c2.5,1.6,5.3,2.4,8.2,2.4    c0.7,0,1.3,0,2-0.1c1.3-0.1,2.5-0.4,3.8-0.9c1.8-0.7,3.4-1.8,4.7-3.3c0.9-1.1,1.5-2.4,1.9-3.7c0.3-1.2,0.5-2.4,0.4-3.7    c0-0.9-0.1-1.8-0.1-2.6c9.9-5,20-9.7,30.3-13.8c2.9,11.2,5.2,22.6,6.8,34l0,0c0.1,0.8,0.2,1.5,0.2,2.3    C93.3,60.7,93.1,61.5,92.6,62.2L92.6,62.2z" />
                  <line className="st2" x1="18" x2="18" y1="8.2" y2="8.2" />
                  <polygon points="18,8.2 18,8.2 18,8.2   " />
                  <path d="M86.1,48.3l-5.4-0.8c0.3-3.4,0.6-6.8,1-10.2c0.1-0.8-0.5-1.5-1.3-1.5c-0.8-0.1-1.5,0.5-1.5,1.3l-0.9,10l-9.4-1.4    c0.3-2.2,0.6-4.4,1-6.6c0.2-0.8-0.3-1.5-1.1-1.7c-0.8-0.2-1.5,0.3-1.7,1.1c0,0,0,0,0,0.1c-0.4,2.2-0.7,4.4-1,6.6l-4.3-0.6    c-0.8-0.1-1.5,0.4-1.6,1.2c-0.1,0.8,0.4,1.5,1.2,1.6l0,0l4.3,0.6c-0.4,3.4-0.7,6.9-1,10.3L56.8,57l0.9-6c0.1-0.8-0.4-1.5-1.2-1.6    c-0.8-0.1-1.5,0.4-1.6,1.2L54,56.5L45.9,55c-0.8-0.2-1.5,0.3-1.7,1.1c-0.2,0.8,0.3,1.5,1.1,1.7c0,0,0,0,0.1,0l0,0l8.2,1.5    c-0.5,3.4-1,6.7-1.5,10.1l-10.8-2c0.3-3.4,0.5-6.8,0.8-10.1c0.1-0.8-0.5-1.5-1.3-1.5c-0.8-0.1-1.5,0.5-1.5,1.3c0,0,0,0,0,0    c-0.3,3.3-0.5,6.6-0.8,9.8l-8.7-1.6c0.2-1.7,0.4-3.4,0.7-5.2c0.1-0.8-0.4-1.5-1.2-1.6c-0.8-0.1-1.5,0.4-1.6,1.2    c-0.3,1.7-0.5,3.4-0.7,5.1l-3.8-0.7c-0.8-0.1-1.5,0.4-1.6,1.1c-0.1,0.8,0.4,1.5,1.1,1.6l0,0l4.1,0.7c-0.1,1.7-0.3,3.4-0.3,5.1    c0,0.8,0.6,1.4,1.4,1.5s1.4-0.6,1.5-1.4l0,0c0.1-1.6,0.2-3.2,0.3-4.7l8.8,1.6c-0.2,2.9-0.4,5.8-0.7,8.7c-1.5-0.2-2.9-0.5-4.4-0.7    c-0.8-0.1-1.5,0.4-1.6,1.2c-0.1,0.8,0.4,1.5,1.2,1.6l0,0c1.5,0.3,3.1,0.5,4.6,0.8c0,0.3-0.1,0.7-0.1,1c-0.1,0.8,0.5,1.5,1.3,1.5    c0.8,0.1,1.5-0.5,1.5-1.3c0,0,0,0,0,0l0,0c0-0.3,0-0.5,0.1-0.8c2.8,0.5,5.6,0.9,8.4,1.4c0.8,0.1,1.5-0.4,1.6-1.2    c0.1-0.8-0.4-1.5-1.2-1.6c-2.9-0.5-5.8-0.9-8.7-1.4c0.2-2.9,0.4-5.8,0.7-8.7l10.6,1.9l-1.1,7.5c-0.1,0.8,0.4,1.5,1.2,1.6    c0.8,0.1,1.5-0.4,1.6-1.2l0,0c0.4-2.5,0.7-4.9,1.1-7.4l9.1,1.7c0.8,0.1,1.5-0.4,1.6-1.2c0.1-0.5-0.1-1.1-0.6-1.4    c0.2,0.1,0.4,0.2,0.7,0.2c0.8,0,1.4-0.6,1.4-1.4l0,0c0-2.9,0.1-5.9,0.2-8.8l9.4,1.7c0.1,0.8,0.9,1.3,1.6,1.1    c0.4-0.1,0.7-0.3,0.9-0.6h0c0.8,0.1,1.5-0.4,1.6-1.1c0.1-0.8-0.4-1.5-1.1-1.6l-0.1,0l1-10.8l5.3,0.8c0.8,0.1,1.5-0.4,1.6-1.2    S87,48.5,86.1,48.3C86.2,48.3,86.1,48.3,86.1,48.3z M64.6,71.7c-0.1-0.1-0.3-0.1-0.4-0.2L55,69.8c0.5-3.4,1-6.7,1.5-10.1l7.8,1.4    c-0.2,3.1-0.2,6.2-0.2,9.3C64,71,64.2,71.4,64.6,71.7z M76.6,60.6l-9.4-1.7c0.2-3.5,0.5-6.9,0.9-10.4l9.5,1.4    C77.3,53.5,76.9,57,76.6,60.6z" />
                </g>
              </g>
            </svg>
          </div>
        </NavLink>

        <div className="nav">
          <select name="cate" id="cate">
            <option value="all">All</option>
          </select>
          <button>Deals</button>
          <button>What`s New</button>
          <button>Delivery</button>
        </div>
      </div>

      <div className="acct-cart-option">
        <div className="search">
          <input type="text" placeholder="Search Products" />
          <svg
            enableBackground="new 0 0 32 32"
            id="Glyph"
            version="1.1"
            viewBox="0 0 32 32"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
              id="XMLID_223_"
            />
          </svg>
        </div>
        <button onClick={getUser}>
          <svg
            viewBox="0 0 24 24"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <circle cx="12" cy="8" fill="#464646" r="4" />
            <path
              d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z"
              fill="#464646"
            />
          </svg>
          <span>Account</span>
        </button>
        <NavLink to="/cart">
          <button>
            <svg
              className="feather feather-shopping-cart"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span>Cart</span>
          </button>
        </NavLink>
      </div>
      <div className="ham-menu" onClick={navToggle}>
        <svg
          enableBackground="new 0 0 32 32"
          id="Filled_Line"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            fill="none"
            id="XMLID_837_"
            stroke="#200F60"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="7"
            x2="25"
            y1="16"
            y2="16"
          />
          <line
            fill="none"
            id="XMLID_836_"
            stroke="#200F60"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="7"
            x2="25"
            y1="25"
            y2="25"
          />
          <line
            fill="none"
            id="XMLID_835_"
            stroke="#200F60"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="7"
            x2="25"
            y1="7"
            y2="7"
          />
        </svg>
      </div>
    </nav>
  );
};

// interface Nav {
//   toggle: () => void;
//   cartToggle: () => void;
//   home: () => void;
// }
export default Nav;
