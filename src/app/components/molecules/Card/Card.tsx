import './_Card.scss'
import Image from 'next/image'

export const Card = () => {
    return (
        <article className='container__card'>
            <div className='container__card__header'>
                <ul>
                    <li>Design <br/> /6pts</li>
                    <li>L&apos;artiste de renom</li>
                </ul>
                <ul>
                    <li>@Maislina</li>
                </ul>
            </div>
            <div className='container__card__main'>
                <div className='container__card__main__image'>
                    <Image
                        src="/images/card1.png"
                        alt=""
                        width={987}
                        height={696}
                    />
                </div>
                <div className='container__card__main__content'>
                    <p>
                    Le design, c’est son terrain de jeu. 
                    Il maîtrise et retranscrit correctement chaque pixel de la maquette.
                    </p>
                    <p>
                    Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou de border-radius ; Figma n’a aucun secret pour ce Dev de talent.
                    </p>
                </div>
            </div>
        </article>
    )
} 