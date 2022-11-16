import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chau Tran <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        🤗 I'm Chau Tran. I love building apps and websites, currently I'm
        learning the MERN stack. I'm also a computer science masters student at
        the University of Pennsylvania.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/chautrancmt26/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
