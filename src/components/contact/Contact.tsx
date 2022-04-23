import ContactEmail from "../notifier/ContactEmail";
import ContactGithub from "../notifier/ContactGithub";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            className="rounded-circle "
            src="https://avatars.githubusercontent.com/u/37475969"
            alt="of Me"
          />
        </div>
        <div className="col-12 col-md-6 py-5">
          <h3>Hi!</h3>
          <div>If you want, you can contact me</div>
          <div>
            via&nbsp;
            <ContactGithub />
            &nbsp;or&nbsp;
            <ContactEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
