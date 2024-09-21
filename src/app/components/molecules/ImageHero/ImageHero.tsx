import './_ImageHero.scss'
import Image from 'next/image'

export const ImageHero = () => {
    return (
        <div className='container__ImageHero'>
            <Image 
                src="/images/icons/card.png"
                alt="card icon"
                width={310}
                height={356}
            />
        </div>
    )
}