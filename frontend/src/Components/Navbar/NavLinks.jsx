import { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const NavLinks = () => {
  const pathname = window.location.pathname;
  const [menu, setMenu] = useState(pathname);
  const [dropdownOpen, setDropdownOpen] = useState();

  const [cookies] = useCookies(["token"]);

  const isAdmin = cookies.user && cookies.user.role === "admin";

  if (cookies === undefined) {
    return <div>Loading.....</div>;
  }

  const LinksList = [
    { title: "Home", to: "/" },
    {
      title: "Categories",
      subLinks: [
        { title: "Men", to: "/men" },
        { title: "Women", to: "/women" },
        { title: "Kids", to: "/kids" },
      ],
    },
    ...(cookies?.token && isAdmin
      ? [
          { title: "Dashboard", to: "/dashboard" },
          { title: "Add Product", to: "/addProduct" },
          { title: "List Product", to: "/listProduct" },
        ]
      : []),
  ];

  return (
    <>
      {LinksList.map((links, index) => (
        <li
          key={index}
          className={menu === links.to ? "nav-item active" : "nav-item"}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {links.subLinks ? (
            <>
              <div
                className="nav-link"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{ cursor: "pointer" }}
              >
                {links.title}
              </div>
              {dropdownOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    backgroundColor: "#fff",
                    listStyle: "none",
                    padding: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    zIndex: 1,
                  }}
                >
                  {links.subLinks.map((subLink, subIndex) => (
                    <li
                      key={subIndex}
                      style={{
                        padding: "8px 16px",
                        borderBottom:
                          subIndex !== links.subLinks.length - 1
                            ? "1px solid #ddd"
                            : "none",
                      }}
                    >
                      <Link
                        to={subLink.to}
                        className="dropdown-item"
                        onClick={() => {
                          setMenu(subLink.to);
                          setDropdownOpen(false);
                        }}
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              className="nav-link"
              to={links.to}
              onClick={() => setMenu(links.to)}
            >
              {links.title}
            </Link>
          )}
          {menu === links.to && (
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
          )}
        </li>
      ))}
    </>
  );
};

export default NavLinks;
