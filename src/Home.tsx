import { CallToAction } from "./components/CallToAction";
import { Center } from "./components/Center";
import { Footer } from "./components/Footer";
import { Grid } from "./components/Grid";
import { GridItem } from "./components/Grid/GridItem";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";

export function Home() {
  return (
    <>
      <Header noMenu />
      <Hero
        heading="Welcome to Capri"
        text="Build static sites with interactive islands"
      />
      <Section>
        <h2>About Capri</h2>
        <p>Capri is a static stite generator with a unique set of features:</p>
        <Grid>
          <GridItem emoji="🧩" title="Component-based">
            Capri sites are built with components. Use a framwork like React,
            Preact or SolidJS rather than a templating language.
          </GridItem>
          <GridItem emoji="🏝" title="Island architecture">
            Sites built with Capri ship zero KB of JavaScript to the client by
            default. Pages with interactive islands get partially hydrated.
          </GridItem>
          <GridItem emoji="🔮" title="Live CMS previews">
            Capri was build with CMS integration in mind. Preview your content
            changes inside a static SPA without a running server.
          </GridItem>
        </Grid>
        <CallToAction>
          <a href="/docs/getting-started">Get started</a>
          <a href="/docs/why/motivation">Learn more</a>
        </CallToAction>
      </Section>
      <Section>
        <Center>
          <div>Sponsored by</div>
          <a href="https://lionizers.com" target="_blank">
            <img src="/lionizers.svg" alt="Lionizers" width="183" height="47" />
          </a>
        </Center>
      </Section>
      <Footer />
    </>
  );
}
