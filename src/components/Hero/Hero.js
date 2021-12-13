import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  const greetings = () => {
    const day = new Date()
    const hr = day.getHours()
    let greetingsMsg = ''
    if (hr >= 0 && hr < 12) {
      greetingsMsg = 'Good Morning!'
    } else if (hr === 12) {
      greetingsMsg = 'Good Noon!'
    } else if (hr >= 12 && hr <= 17) {
      greetingsMsg = 'Good Evening!'
    } else {
      greetingsMsg = 'Good Evening!'
    }
    return  <>{greetingsMsg} <br /> I am Biswajeet. Nice to meet you.</>
  }
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
          {greetings()}
          </SectionTitle>
          <SectionText>
            I am a full stack developer from Odisha, India. Currently I am working for <i>Verizon</i> and living in Hyderabad. I enjoy providing enterprise solutions on web application design and development using <b>React</b> along with the backend support with <b>J2EE</b> and <b>Database</b>.
          </SectionText>
          {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        </LeftSection>
      </Section>
    </>
  )
};

export default Hero;