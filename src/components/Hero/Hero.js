import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  const greetings = () => {
    const day = new Date()
    const hr = day.getHours()
    let greetingsMsg = ''
    if (hr >= 5 && hr < 12) {
      greetingsMsg = 'Good Morning!'
    } else if (hr >= 12 && hr < 17) {
      greetingsMsg = 'Good Afternoon!'
    } else if (hr >= 17 && hr <= 20) {
      greetingsMsg = 'Good Evening!'
    } else {
      greetingsMsg = 'Greetings!'
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
            I am a full-stack developer from Odisha, India. Currently, I am working in <i>DBS</i> and living in Hyderabad. I was in <i>DBS Singapore</i> recently. I enjoy providing enterprise solutions on web application design and development using <b>React</b> along with the backend support with <b>Java</b> and <b>Database</b> with industry best practices. I am mostly engaed with low latency application development and deployment in scalable cloud infrastructure with Openshift.
          </SectionText>
          {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        </LeftSection>
      </Section>
    </>
  )
};

export default Hero;