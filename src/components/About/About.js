import React from 'react';

import { Section, SectionDivider,SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => (
    <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
            Hi, My full name is <b><i>Biswajeet Rout.</i></b> I have more than 6 years of experience in the IT industry. I am always keen to learn the new technologies that come out in the market and understand the potential advantages of one on another and choose the best out of all.
            I love following the keynotes/dev summits presented by the big tech giants like Google IO, Facebook F8, AWS re: Invent, etc. I like to understand/analyze the worth of hot topics like WEB3.0 which most people talk about today. Apart from keeping track of technological movement, I like to spend most of my time playing Badminton, Snooker/pool.
        </SectionText>
        <SectionDivider />
    </Section>
);

export default About;