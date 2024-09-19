import { CardHero } from '../CardHero/CardHero';
import './_Heading.scss';
import Image from 'next/image';

export const Heading = () =>{
    return (
        <section>
            <div>
                <h1>
                    Que le plus fort,
                    <span>
                        <Image
                            src="/images/icons/flash.svg"
                            alt=""
                            width={103}
                            height={80}
                        />
                    </span>
                    l&apos;emporte
                </h1>
            </div>
            <CardHero />
        </section>
    )
}