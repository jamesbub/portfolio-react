import React from 'react';

import { Section, SectionDivider,SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => (
    <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
        Hi, My full name is <b><i style={{color:'white'}}>Biswajeet Rout.</i></b> I have more than <b><i style={{color:'white'}}>8</i></b> years of rich experience in the dynamic landscapes of India and Singapore. 
            {
                    `
                    Throughout my career journey, I have demonstrated exceptional expertise in various domains of IT, showcasing versatility and adaptability in diverse environments. Driven by a thirst for new challenges and global exposure, I embarked on an enriching professional journey to DBS Singapore. In this dynamic and multicultural metropolis, I embraced the opportunity to broaden my horizon and deepen my understanding of international IT practices. My tenure in Singapore witnessed remarkable growth, marked by successful collaborations with cross-functional teams and a proven track record of delivering high-impact projects.
                    I hold a diverse skill set encompassing areas such as software development, system architecture, cloud computing, and project management. My proficiency in cutting-edge technologies coupled with a strategic mindset enables me to tackle complex IT initiatives with finesse. Whether it's architecting scalable IT infrastructures, or spearheading digital transformation initiatives, myself I am known for my ability to deliver results that drive business success.
                    Beyond technical prowess, I am highly regarded for my leadership acumen and collaborative spirit. I excel in fostering cohesive teams and nurturing talent, instilling a culture of innovation and continuous learning. My effective communication skills and knack for building strong stakeholder relationships have been instrumental in driving alignment and achieving organizational objectives.
                    In addition to my professional accomplishments, I am committed to staying abreast of emerging trends and best practices in the ever-evolving IT landscape. I actively engage in knowledge-sharing forums, participate in industry events, and pursue ongoing certifications to stay ahead of the curve.
                    With a proven track record of success, a passion for innovation, and a commitment to excellence, I continue to make invaluable contributions to the realm of Information Technology, leaving a lasting impact wherever I go. As I embark on the next phase of my journey, I remain poised to tackle new challenges, drive meaningful change, and shape the future of IT on a global scale.
                    `
            }
        </SectionText>
        <SectionDivider />
    </Section>
);

export default About;