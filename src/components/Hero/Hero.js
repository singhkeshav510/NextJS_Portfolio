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
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi Viewer! My Name is Keshav Singh. ......
        <br />
        <br />
        "All Knowledge is Connected to All Other Knowledge. The Fun is in Making
        the Connections." - <i>Arthur Aufderheide</i>
      </SectionText>
      <Button onClick={() => console.log("Link to Resume")}>Know More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
