import { StickyStack } from '../../molecules/StickyStack/StickyStack';
import './_CardList.scss';
import { cardData } from '@/app/data/Card.data';
import { Card } from '../../molecules/Card/Card';

export const CardList = () => {
    return (
        <StickyStack>
            {cardData.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </StickyStack>
    );
};
