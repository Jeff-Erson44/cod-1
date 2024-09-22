import './_Card.scss';
import Image from 'next/image';
import { CardItem } from '../../../type/Card.types'
import { Cursor } from '../../atoms/Cursor/Cursor';

interface CardProps {
    item: CardItem;
}

export const Card = ({ item } :CardProps) => {

    return (
        <article className="container__card" style={{ backgroundColor: item.background}}>
            <div className="container__card__header">
                <ul>
                    <li>{item.type} <br /> /{item.points}pts</li>
                    <li>{item.title}</li>
                </ul>
                <div className="container__card__header__cursor">
                {item.person.map(person => (
                    <Cursor 
                        key={person.id}
                        name={person.name}         
                        color={person.color} 
                        border={person.border}
                        iconColor={person.iconColor}        
                    />
                ))}
                </div>
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
