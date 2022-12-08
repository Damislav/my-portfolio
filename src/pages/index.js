import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import { BackgroundAnimationWrapper } from "../components/BackgrooundAnimation/BackgroundStyles";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout title="Portfolio">
      <Section flex center>
        <BackgroundAnimationWrapper left>
          <BgAnimation />
        </BackgroundAnimationWrapper>
        <Hero />
        <BackgroundAnimationWrapper right>
          <BgAnimation />
        </BackgroundAnimationWrapper>
      </Section>
      <Projects />
      <Skills />
      <Technologies />
    </Layout>
  );
};

export default Home;
