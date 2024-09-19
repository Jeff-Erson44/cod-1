import './_CardHero.scss'
import Image from 'next/image'

export const CardHero = () => {
    return (
        <div>
            <Image 
                src="/images/icons/card.png"
                alt="card icon"
                width={310}
                height={356}
            />
        </div>
    )
}