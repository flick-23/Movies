/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import HeroNav from "./HeroNav";
import Output from "../Output/Output";
const Hero = () => {
  return (
    <section className="hero" css={styles}>
      <HeroNav />
      <Output />
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: #1b1c22;
`;

export default Hero;
