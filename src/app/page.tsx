import { HorizontalText } from "./components/atoms/HorizontalText/HorizontalText";
import { Card } from "./components/molecules/Card/Card";
import { Hero } from "./components/organisms/Hero/Hero";

export default function Home() {
  return (
  <>
    <Hero />
    <HorizontalText />
    <Card />
  </>
  );
}
