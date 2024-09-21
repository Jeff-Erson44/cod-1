import { Heading } from "../../molecules/Heading/Heading"
import { ImageHero } from "../../molecules/ImageHero/ImageHero"
import './_Hero.scss'

export const Hero = () => {
    return(
        <section className="container__hero">
            <Heading />
            <ImageHero/>
        </section>
    )
}