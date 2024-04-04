import React, { useEffect } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Container, Cert } from './CertificationStyles';

const data = [
  { name: 'DVA'}
];

const Certification = () => {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return <Section id="certifications">
    <SectionTitle>Certification</SectionTitle>
    <Container>
      {data.map((cert, index) => (
        <Cert key={index} bgColor={'#e5a022'}>
          {
              (cert.name === 'DVA') && <div data-iframe-width='150' data-iframe-height='270' data-share-badge-id='f19b6deb-ef02-4eeb-b874-5871a8436e3d' data-share-badge-host='https://www.credly.com'></div>
          }
        </Cert>
      ))}
    </Container>
    <SectionDivider/>
  </Section>
}

export default Certification;
