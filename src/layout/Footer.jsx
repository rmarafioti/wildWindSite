import { NavLink } from "react-router-dom";

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
          <NavLink to="/deposits">DEPOSITS</NavLink>
        </li>
        <li>
          <NavLink to="/giftcards">GIFT CARDS</NavLink>
        </li>
        <li>social media</li>
      </ul>
    </>
  );
}
