import React from "react";
import svg from "../img/socials/vk.png"
import svg1 from "../img/socials/instagram.svg";
import svg2 from "../img/socials/twitter.svg";
import svg3 from "../img/socials/gitHub.svg";
import svg4 from "../img/socials/linkedIn.svg";
const Footer = () => {
  const icons = [
    { id: 0, src: svg, alt: "vk" },
    { id: 1, src: svg1, alt: "inst" },
    { id: 2, src: svg2, alt: "twitter" },
    { id: 3, src: svg3, alt: "gitHub" },
    { id: 4, src: svg4, alt: "in" },
  ];
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <ul className="socials">
              {icons.map((icon) => (
                <li key={icon.id} className="social-item">
                  <a href="#">
                    <img src={icon.src} alt={icon.alt} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="date">© 2022 frontend-dev.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
