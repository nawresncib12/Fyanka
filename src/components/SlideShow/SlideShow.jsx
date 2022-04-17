import classes from "./SlideShow.module.css";
import Title from "../../UI/Title";
import FireWork from "../../UI/Firework";
import { useState, useRef } from "react";
import { useEffect } from "react";
const SlideShow = (props) => {
  const scroll = props.scroll;
  const setScroll = props.setScroll;
  const slides = useRef(null);
  const executeScroll = () => slides.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const [slide, setSlide] = useState(1);
  const nextHandler = () => {
    if (slide === 4) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };

  useEffect(() => {
    if (scroll) {
      executeScroll();
      setScroll(false);
    }
  }, [scroll,setScroll]);
  return (
    <div className={classes.slideShow} ref={slides}>
      <FireWork
        width="50px"
        height="50px"
        color="#EF9F99"
        style={{ position: "absolute", left: "50%", top: "30%" }}
      ></FireWork>
      <FireWork
        width="30px"
        height="30px"
        color="#EF9F99"
        style={{ position: "absolute", left: "25%", top: "50%" }}
      ></FireWork>
      <div className={classes.next} onClick={nextHandler}>
        <img src="assets/next.png" alt="next" />
      </div>
      <h2>Comment ça marche?</h2>
      <div className={classes.circles}>
        <div
          className={`${classes.circle} ${slide === 1 ? classes.active : ""}`}
        ></div>
        <div
          className={`${classes.circle} ${slide === 2 ? classes.active : ""}`}
        ></div>
        <div
          className={`${classes.circle} ${slide === 3 ? classes.active : ""}`}
        ></div>
        <div
          className={`${classes.circle} ${slide === 4 ? classes.active : ""}`}
        ></div>
      </div>
      <div className={classes.slides}>
        <div className={classes.step}>
          <Title>Etape{slide}</Title>
        </div>
        <div className={classes.root}>
          <div className={classes.phone}>
            <div className={classes.background}>
              <img className={classes.border} src="assets/phone.png" alt="" />
              <img className={classes.content} src="assets/phone1.png" alt="" />
            </div>
          </div>
          <div className={classes.description}>
            <h3>Créer un compte</h3>
            <p>Vous devez créer un compte pour pouvoir </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
