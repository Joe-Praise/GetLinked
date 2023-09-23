import React, { useContext, useRef, useState } from "react";
import * as Scroll from "react-scroll";
import { NavLink } from "react-router-dom";

import logo from "../images/getlinked.png";
import ReactDOM from "react-dom";
import { AppData } from "../Context";
import { textEnter, textLeave } from "../utils/TextHoverController";
import close from "../images/close btn.png";
import openMenu from "../images/Vector (5).png";

const Navigation = () => {
  const Link = Scroll.Link;
  const menu = useRef();
  const ctx = useContext(AppData);
  const [, setCursorVariant] = ctx.getCursorVariant;
  const [modal, setModal] = useState(false);

  const closeMenuHandler = () => {
    if (!modal) return;
    menu.current.style.transition = "1s ease all";
    menu.current.style.transform = "translateY(-500%)";
    setModal((prevState) => !prevState);
  };

  const openMenuHandler = () => {
    menu.current.style.transform = "translateY(0%)";
    setTimeout(() => {
      setModal((prevState) => !prevState);
    }, 350);
  };

  // backdrop component
  const Backdrop = () => {
    return <div className="backdrop" onClick={closeMenuHandler}></div>;
  };

  const links = [
    {
      image: close,
      onClick: closeMenuHandler,
      className: "menuBtn",
      id: "close1",
    },
    {
      name: "Timeline",
      route: "timeline",
      className: "navitem",
    },
    {
      name: "Overview",
      route: "overview",
      className: "navitem",
    },
    {
      name: "FAQs",
      route: "faqs",
      className: "navitem",
    },
    {
      name: "Contact",
      route: "/contact",
      className: "navitem",
      navLink: true,
    },
    {
      name: "Register",
      route: "/register",
      className: "RegisterBtn",
      navLink: true,
    },
  ];

  return (
    <header>
      <nav className="nav">
        <figure
          className="logo"
          onMouseEnter={() => textEnter(setCursorVariant, "text")}
          onMouseLeave={() => textLeave(setCursorVariant, "default")}
        >
          <NavLink to="/">
            <img src={logo} alt="Getlinked logo" />
          </NavLink>
        </figure>
        <div className="openMenuContainer" onClick={openMenuHandler}>
          <img src={openMenu} alt="open menu logo" />
        </div>
        <ul className="navNavLinksContainer" ref={menu}>
          {links.map((el, i) => {
            return el.onClick ? (
              <li
                className={el.className}
                onClick={el.onClick}
                key={el.id}
                onMouseEnter={() => textEnter(setCursorVariant, "star")}
                onMouseLeave={() => textLeave(setCursorVariant, "default")}
              >
                <img src={el.image} alt="x representing the close button" />
              </li>
            ) : (
              <li
                key={i}
                onMouseEnter={() => textEnter(setCursorVariant, "link")}
                onMouseLeave={() => textLeave(setCursorVariant, "default")}
              >
                {el.navLink ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${el.className} active` : el.className
                    }
                    to={el.route}
                    end
                    onClick={closeMenuHandler}
                  >
                    {el.name}
                  </NavLink>
                ) : (
                  <Link
                    className={el.className}
                    to={el.route}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    onClick={closeMenuHandler}
                  >
                    {el.name}
                  </Link>
                )}
              </li>
            );
          })}
          {modal && (
            <React.Fragment>
              {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById("overlay")
              )}
            </React.Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
