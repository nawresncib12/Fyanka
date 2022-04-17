import classes from "./Features.module.css";
import Title from "../../UI/Title";
import FeatureCard from "./FeatureCard";
import { useState,useRef,useEffect } from "react";
const Features = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  };
  const options = {};
  const myObserver = new IntersectionObserver(callback, options);
  useEffect(() => {
    myObserver.observe(domRef.current);
  }, []);
  return (
    <div className={classes.features}>
      <Title width="60%">Lorem ipsum dol Lorem ipsum dolor sit ame Lorem</Title>
      <div className={classes.featureBox}>
        <div className={classes.featureContainer}>
          <FeatureCard></FeatureCard>
          <FeatureCard></FeatureCard>
          <FeatureCard></FeatureCard>
          <FeatureCard></FeatureCard>
        </div>
        <div
          className={`${classes.featureDescription} 
                  ${isVisible ? classes.animate : ""}`}
          ref={domRef}
        >
          <p>
            Lorem ipsum dol Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame
            or sit ameLorem ipsum dol Lorem
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
