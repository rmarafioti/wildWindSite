import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <h1>FOOTER</h1>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/tattoos">TATTOOS</NavLink>
        </li>
        <li>
          <NavLink to="/shop">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          <a href="https://www.instagram.com/wildwindtattoo/?hl=en">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/wildwindtattoo/">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <NavLink to="/deposits">DEPOSITS</NavLink>
        </li>
        <li>
          <NavLink to="/giftcards">GIFT CARDS</NavLink>
        </li>
        <li>
          <NavLink to="/aftercare">AFTERCARE</NavLink>
        </li>
      </ul>
    </>
  );
}
