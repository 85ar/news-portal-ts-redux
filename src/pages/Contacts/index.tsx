import React from "react";
import routeMain from "./routes";

import ArturImg from "assets/img/vai.jpg";

import "./styles.scss";

const Contacts = () => {
  return (
    <section className="contactsPage">
      <div className="info">
        <div className="phone">
          <a href="tel:+79991234576">+7 (999) 123 45 76</a>
        </div>
        <div className="name">
          Артур <br /> Валеев
        </div>
        <div className="mail">
          <a href="mailto:mail@domain.com">mail@domain.com</a>
        </div>
        <div className="position">Frontend Developer</div>
        <div className="technologies">HTML CSS JS</div>
      </div>
      <div className="image">
        <img src={ArturImg} alt={ArturImg} />
      </div>
    </section>
  );
};

export { routeMain };
export default Contacts;
