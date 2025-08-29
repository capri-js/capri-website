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
        <Hero text="Static Sites with Interactive Islands" />
        <CallToAction>
          <Button href="/docs/getting-started">Get started</Button>
          <Button href="/docs/why" outline>
            About Capri
          </Button>
        </CallToAction>
        <Section>
          <Grid>
            <GridItem icon={<ComponentIcon />} title="Component-based">
              Build your site using standard React or Preact components for a
              familiar and powerful development experience.
            </GridItem>
            <GridItem icon={<IslandIcon />} title="Island Architecture">
              Enjoy the benefits of an island-based architecture with zero KB of
              JavaScript shipped to the client by default.
            </GridItem>
            <GridItem icon={<PreviewIcon />} title="CMS Integration">
              Seamlessly integrate with CMS like DecapCMS for real-time live
              previews and static HTML generation for production.
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
