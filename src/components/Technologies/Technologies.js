import React from 'react';
import { DiReact, DiCss3, DiJava, DiJenkins, DiAws, DiDocker, DiJira } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Front-end To Back-end To Deployment
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End (Design)</ListTitle>
          <ListParagraph>
            CSS/SCSS/SASS <br />
            Tailwind CSS <br />
            Styled Components <br />
            Bootstrap, Material UI <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End (Development)</ListTitle>
          <ListParagraph>
            HTML, JavaScript, Regex <br />
            ReactJs, NextJs, Redux, Axios <br />
            NodeJs, NPM, Web APIs <br/>
            Jest, Enzyme
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Java, J2EE, Spring Framework, SpringBoot <br />
            JDBC, AOP, Redis, Maven, SQL <br/>
            JUnit
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJenkins size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CI/CD</ListTitle>
          <ListParagraph>
            Jenkins,Blue Ocean, Ansible, Gitlab
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud (AWS)</ListTitle>
          <ListParagraph>
            VPC, IAM, EC2, S3, Lambda, CloudFront, SNS, SQS, EBS, CloudWatch, ECS, EKS, API Gateway, Auto Scaling, Route 53, ELB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Containerization and Orchestration</ListTitle>
          <ListParagraph>
            Docker, Kubernetes, ECS, EKS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJira size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Miscellaneous</ListTitle>
          <ListParagraph>
            Git, JSON, XML, Eclipse, VS Code, Sonar, Fortify, Black Duck, Splunk <br />
            Jira, Confluence <br/>
            SAFe (Scaled Agile Framework)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
