import "./ContactForm.css";

const ContactForm = () => {

  return (
    <div className="wrapper">
      <form action="">
        <div className="title">Contact Us</div>
        <div className="name-wrapper">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          required
        />
        <button id="submit" name="submit" type="submit"></button>
      </form>
    </div>
  );
};

export default ContactForm;
