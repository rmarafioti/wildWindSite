import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <h1>CONTACT</h1>
      <p>
        ADDRESS:
        <a href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082731,-87.6874096,15z/data=!4m6!3m5!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!16s%2Fg%2F11bw5xqdp7?entry=ttu">
          {" "}
          1452 N. Western Ave. Chicago, IL 60622
        </a>
      </p>
      <p>
        PHONE:<a href="tel:+7732272027"> 773.227.2027</a>
      </p>
      <p>
        EMAIL:
        <a href="mailto:wildwindtattoo@gmail.com"> wildwindtattoo@gmail.com</a>
      </p>
      <div>
        <h1>
          <a href="https://www.instagram.com/wildwindtattoo/?hl=en">
            <FaInstagram />
          </a>
        </h1>
        <h1>
          <a href="https://www.facebook.com/wildwindtattoo/">
            <FaFacebookSquare />
          </a>
        </h1>
      </div>
    </>
  );
}
