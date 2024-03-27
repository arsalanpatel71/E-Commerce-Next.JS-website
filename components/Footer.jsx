import { CiInstagram, CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import AmexPay from "../public/assets/Images/Amex.jpg";
import ApplePay from "../public/assets/Images/ApplePay.jpg";
import GooglePay from "../public/assets/Images/GooglePay.jpg";
import ShopPay from "../public/assets/Images/ShopPay.jpg";
import PayPal from "../public/assets/Images/Paypal.jpg";
import MasterCard from "../public/assets/Images/MasterCard.jpg";
const Footer = () => {
  return (
    <section className="footer">
      <div
        className="footer-top"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="footer-top-left-side">
            <h3>BE THE FIRST TO KNOW</h3>
            <h5>Sign up for updates from mettā muse.</h5>
            <div className="footer-top-left-side-input">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="footer-input"
                style={{ padding: "10px" }}
              />
              <button style={{ cursor: "pointer" }}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="footer-top-right-side">
          <h3>CONTACT US</h3>
          <h6>+44 221 133 5360</h6>
          <h6>customercare@mettamuse.com</h6>
          <h3>CURRENCY</h3>
          <h6>USD</h6>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left-side">
          <ul>
            <li>
              <h2>mettā muse</h2>
            </li>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-bottom-middle-side">
          <ul>
            <li>
              <h2>Quick Links</h2>
            </li>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-bottom-right-side">
          <h3>Follow Us</h3>
          <CiInstagram className="social-media" style={{ cursor: "pointer" }} />
          <CiLinkedin className="social-media" style={{ cursor: "pointer" }} />
          <h3>mettā muse Accepts</h3>
          <div className="payment-methods">
            <Image src={GooglePay} alt="GooglePay" />
            <Image src={MasterCard} alt="MasterCard" />
            <Image src={PayPal} alt="PayPal" />
            <Image src={AmexPay} alt="AmexPay" />
            <Image src={ApplePay} alt="ApplePay" />
            <Image src={ShopPay} alt="ShopPay" />
          </div>
        </div>
      </div>
      <p>Copyright © 2023 mettamuse. All rights reserved.</p>
    </section>
  );
};

export default Footer;
