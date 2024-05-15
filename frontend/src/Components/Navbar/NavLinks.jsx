import { useState } from "react";
import { Link } from "react-router-dom";

const LinksList = [
  { title: "Home", to: "/" },
  { title: "Men", to: "/men" },
  { title: "Women", to: "/women" },
  { title: "Kids", to: "/kids" },
];

const NavLinks = () => {
  const pathname = window.location.pathname;
  const [menu, setMenu] = useState(pathname);

  return (
    <>
      {LinksList.map((links) => (
        <li
          className={menu === links.to ? "nav-item active" : "nav-item"}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            className="nav-link"
            to={links.to}
            onClick={() => {
              setMenu(links.to);
            }}
          >
            {links.title}
          </Link>
          {menu === links.to ? (
            <hr
              style={{
                border: "none",
                width: "35%",
                height: "3px",
                borderRadius: "10px",
                backgroundColor: "#ff4141",
                margin: 0,
              }}
            />
          ) : (
            <></>
          )}
        </li>
      ))}
    </>
  );
};

export default NavLinks;
