import classes from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.header}>Contact us</h1>
        <div className={classes.sepDiv}></div>
        <p className={classes.aboutUs}>
          For questions or concerns, please use the form below. If your matter
          is URGENT, please call us at
          <br />
          <span className={classes.phoneNumber}>123-456-789</span> , and DO NOT
          use the form below.
        </p>
      </div>


      <div>
        <h1 className={classes.header}> Connect</h1>
        <div className={classes.sepDiv}></div>


        <form className={classes.contactForm}>
        <div className={classes.inputDiv}>
          <h1>
            Your Name<span className={classes.red}>*</span>
          </h1>
          <input />
        </div>
        <div className={classes.inputDiv}>
          <h1>
            Your Email<span className={classes.red}>*</span>
          </h1>
          <input />
        </div>
        <div className={classes.inputDiv}>
          <h1>
            Subject
          </h1>
          <input />
        </div>
        <div className={classes.inputDiv}>
          <h1>
            Your message
          </h1>
          <textarea />
        </div>

        <button className={classes.submitButton}>Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default ContactPage;
