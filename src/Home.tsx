import { Button } from "./components/Button";
import { CallToAction } from "./components/CallToAction";
import { ColoredBackground } from "./components/ColoredBackground";
import { Footer } from "./components/Footer";
import { Grid } from "./components/Grid";
import { GridItem } from "./components/Grid/GridItem";
import { Hero } from "./components/Hero";
import { Illustration } from "./components/Illustration";
import { Section } from "./components/Section";
import { Sponsors } from "./components/Sponsors";
import { ComponentIcon } from "./icons/ComponentIcon";
import { IslandIcon } from "./icons/IslandIcon";
import { PreviewIcon } from "./icons/PreviewIcon";

export function Home() {
  return (
    <>
      <ColoredBackground>
        <Hero text="Build static sites with interactive islands" />
        <CallToAction>
          <Button href="/docs/getting-started">Get started</Button>
          <Button href="/docs/why/motivation" outline>
            About Capri
          </Button>
        </CallToAction>
        <Section>
          <Grid>
            <GridItem icon={<ComponentIcon />} title="Component-based">
              Capri sites are built with components. Use a framework like React,
              Preact or SolidJS rather than a templating language.
            </GridItem>
            <GridItem icon={<IslandIcon />} title="Island architecture">
              Sites built with Capri ship zero KB of JavaScript to the client by
              default. Pages with interactive islands get partially hydrated.
            </GridItem>
            <GridItem icon={<PreviewIcon />} title="Live CMS previews">
              Capri was build with CMS integration in mind. Preview your content
              changes inside a static SPA without a running server.
            </GridItem>
          </Grid>
        </Section>
        <Illustration />
      </ColoredBackground>
      <Sponsors>
        <a href="https://lionizers.com" target="_blank">
          <img src="/lionizers.svg" alt="Lionizers" width="193" height="58" />
        </a>
      </Sponsors>
      <Footer />
    </>
  );
}
