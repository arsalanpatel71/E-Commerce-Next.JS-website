import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import LogoImage from "../../public/assets/Images/Logo.png";
import Image from "next/image";

import PropTypes from "prop-types";

const Navbar = ({ showNavbar, isMobile }) => {
  return (
    <section className="navbar">
      <div className="navbar-elements">
        {isMobile && <button className="navbar-toggle">☰</button>}
        <div
          className="navbar-logo"
          style={{
            position: "relative",
            width: "36px",
            height: "36px",
            marginTop: "6px",
            marginLeft: "96px",
            cursor: "pointer",
          }}
        >
          <Image
            src="/assets/Images/Logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="branding">
          <h1 className="navbar-logo-heading" style={{ cursor: "pointer" }}>
            LOGO
          </h1>
        </div>
        <div className="navbar-actions">
          <CiSearch className="navbar-icon" style={{ cursor: "pointer" }} />
          <CiHeart className="navbar-icon" style={{ cursor: "pointer" }} />
          <LiaShoppingBagSolid
            className="navbar-icon"
            style={{ cursor: "pointer" }}
          />
          <CiUser className="navbar-icon" style={{ cursor: "pointer" }} />
          <div className="language-selector" style={{ cursor: "pointer" }}>
            <h5>ENG</h5>
            {/* <RiArrowDropDownLine className="navbar-icon" /> */}
          </div>
        </div>
      </div>
      <div className={`navbar-links ${showNavbar ? "show" : ""}`}>
        <h5 className="navbar-link">SHOP</h5>
        <h5 className="navbar-link">SKILLS</h5>
        <h5 className="navbar-link">STORIES</h5>
        <h5 className="navbar-link">ABOUT</h5>
        <h5 className="navbar-link">CONTACT US</h5>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  showNavbar: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};
export default Navbar;
