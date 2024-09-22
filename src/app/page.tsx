import { HorizontalText } from "./components/atoms/HorizontalText/HorizontalText";
import { CardList } from "./components/organisms/CardList/CardList";
import { Hero } from "./components/organisms/Hero/Hero";
import './style/settings.scss'

export default function Home() {
  return (
  <>
    <Hero />
    <HorizontalText />
    <CardList />
  </>
  );
}
