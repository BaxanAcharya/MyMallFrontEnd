import React from "react";
import Logo from "../../assets/img/logo.PNG";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LockIcon from "@material-ui/icons/Lock";

const NavBar = () => {
  return (
    <div className="navbar">
      <div class="navbar__logo">
        <img alt="Logo" src={Logo} className="navbar__logoImage" />
      </div>

      <div className="navbar__search">
        <div style={{ display: "flex", flex: 1 }}>
          <input
            type="text"
            placeholder="Search Product"
            className="navbar__searchInput"
          />
          <SearchIcon className="navbar__searchIcon" />
        </div>
      </div>

      <div className="navbar__Cart">
        <div style={{ display: "flex" }}>
          <Badge badgeContent={0} color="secondary">
            <ShoppingBasketIcon style={{ color: "white " }} />
          </Badge>
        </div>
      </div>

      <div className="navbar__login">
        <LockIcon style={{ color: "white " }} />
        <span className="navbar__loginSpan" style={{ color: "white" }}>
          Login
        </span>
      </div>
    </div>
  );
};

export default NavBar;
