import * as React from "react";
import ContactEmail from "../notifier/ContactEmail";
import ContactGithub from "../notifier/ContactGithub";
import "./Footer.css";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="mt-auto">
      <div className="row mx-0">
        <div className="col-md-4 col-6 text-start">
          <span> &copy; J.Denda {getCurrentYear()}</span>
        </div>
        <div className="col-4 d-none d-md-block">
          <span className="d-inline-flex">
            <span className="">Made with &nbsp;</span>

            <a className="gh" href="https://getbootstrap.com/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" />
              </svg>
            </a>
            <span> &nbsp; and TS</span>
          </span>
        </div>
        <div className="col-md-4 col-6 text-end">
          <ContactEmail />
          <ContactGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
