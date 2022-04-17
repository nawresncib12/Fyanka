import classes from "./Hero.module.css";
import Info from "./Info";
import HeroImage from "./HeroImage";
const Hero = (props) => {
  return (
    <div className={classes.heroContainer}>
      <Info setScroll={props.setScroll}></Info>
      <HeroImage></HeroImage>
    </div>
  );
};

export default Hero;
