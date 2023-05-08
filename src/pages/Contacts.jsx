import React from "react";

const Contacts = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
        <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p className="text">Moscow, Russia</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a className="text" href="tel:+79051234567">+7 (905) 123-45-67</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p  className="text-3">
                <a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
