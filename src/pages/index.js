import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import { BackgroundAnimationWrapper } from "../components/BackgrooundAnimation/BackgroundStyles";

import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout title="Portfolio">
      <Section flex center>
        <BackgroundAnimationWrapper top left>
          <BgAnimation />
        </BackgroundAnimationWrapper>
        <Hero />
        <BackgroundAnimationWrapper bottom right>
          <BgAnimation />
        </BackgroundAnimationWrapper>
      </Section>

      <Projects />

      <Technologies />
    </Layout>
  );
};

export default Home;
