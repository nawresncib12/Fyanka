import classes from "./FeatureCard.module.css";
import { useState, useEffect, useRef } from "react";
const FeatureCard = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }else{
        setVisible(false)
      }
    });
  };
  const options = {};
  const myObserver = new IntersectionObserver(callback, options);
  useEffect(() => {
    myObserver.observe(domRef.current);
  }, []);
  return (
    <div className={classes.featureCard}>
      <img src="assets/invitation.svg" alt="INV" />
      <h3>Faire quelque chose</h3>
      <p>Lorem ipsum dol Lorem ipsum dolor sit ame Lorem sit ame Lorem</p>
      <div
        className={`${classes.flap1} 
                  ${isVisible ? classes.animate : ""}`}
        ref={domRef}
      ></div>
      <div
        className={`${classes.flap2} 
                  ${isVisible ? classes.animate : ""}`}
        ref={domRef}
      ></div>
    </div>
  );
};

export default FeatureCard;
