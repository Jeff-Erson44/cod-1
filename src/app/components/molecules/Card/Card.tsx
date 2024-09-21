import './_Card.scss';
import Image from 'next/image';
import { CardItem } from '../../../type/Card.types'

interface CardProps {
    item: CardItem;
}

export const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <article className="container__card">
            <div className="container__card__header">
                <ul>
                    <li>{item.type} <br /> /{item.points}pts</li>
                    <li>{item.title}</li>
                </ul>
                <ul>
                    {item.person.map(person => (
                        <li key={person.id}>{person.name}</li>
                    ))}
                </ul>
            </div>
            <div className="container__card__main">
                <div className="container__card__main__image">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={987}
                        height={696}
                    />
                </div>
                {item.content.map(content => (
                    <div className="container__card__main__content" key={content.id}>
                        <p>
                            {content.para_1[0].text_0}
                            <strong>{content.para_1[0].strong}</strong>
                            {content.para_1[0].text_1}
                        </p>
                        <p>
                            {content.para_2[0].text_0}
                            <strong>{content.para_2[0].strong}</strong>
                            {content.para_2[0].text_1}
                        </p>
                    </div>
                ))}
            </div>
        </article>
    );
};
