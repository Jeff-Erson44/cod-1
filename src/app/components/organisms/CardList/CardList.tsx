import { StickyStack } from '../../molecules/StickyStack/StickyStack';
import './_CardList.scss';
import { cardData } from '@/app/data/Card.data';
import { Card } from '../../molecules/Card/Card';
import { FinalFrame } from '../../molecules/FinalFrame/FinalFrame';

export const CardList = () => {
    return (
        <StickyStack>
            {cardData.map((item, index) => (
                <Card key={index} item={item} />
            ))}
            <FinalFrame />
        </StickyStack>
    );
};
