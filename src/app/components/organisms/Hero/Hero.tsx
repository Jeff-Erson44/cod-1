import { CardHero } from "../../molecules/CardHero/CardHero"
import { Heading } from "../../molecules/Heading/Heading"
import './_Hero.scss'

export const Hero = () => {
    return(
        <section className="container__hero">
            <Heading />
            <CardHero/>
        </section>
    )
}