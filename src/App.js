import Theme from "./styles/theme";
import { Section } from './styles/GlobalComponents'
import Hero from './components/Hero/Hero';
import BgAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/TimeLine/TimeLine';
import Acomplishments from './components/Acomplishments/Acomplishments';
import { Layout } from './components/layout/Layout';
import About from "./components/About/About";
import Certification from "./components/Certification/Certification";
function App() {
  return (
    <Theme>
      <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <About/>
      <Timeline />
      <Acomplishments />
      <Certification/>
      </Layout>
    </Theme>
  );
}

export default App;
