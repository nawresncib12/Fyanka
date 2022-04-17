import classes from "./Footer.module.css";
import Firework from "../../UI/Firework";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.description}>
        <div className={classes.company}>
          <Firework
            color="white"
            height=" calc(20px + 1vmin);"
            style={{
              paddingRight: "calc(15px + 1vmin)",
            }}
          ></Firework>
          <h6>Fyanka</h6>
        </div>
        <p>
          Lorem ipsum dol Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame or
          sit ame
        </p>
      </div>
      <div className={classes.download}>
        <h2>Download now for free</h2>
        <div className={classes.images}>
          <img src="assets/google play.png" alt="google" />
          <img src="assets/appstore.png" alt="appstore" />
        </div>
      </div>
      <div className={classes.media}>
        <div className={classes.contact}>
          <h3>Our contact</h3>
          <div className={classes.con}>
            <img src="assets/email.svg" alt="email" />
            <h5>ev.lilik@gmail.com</h5>
          </div>
          <div className={classes.con}>
            <img src="assets/phoneIcon.png" alt="phone" />
            <h5>+ 216 99 856 785</h5>
          </div>
        </div>
        <div className={classes.social}>
          <h3>Follow us</h3>

          <div className={classes.con}>
            <img src="assets/fb.png" alt="email" />
            <img src="assets/insta.png" alt="email" />
            <img src="assets/in.png" alt="email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
