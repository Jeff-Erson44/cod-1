export type Person = {
    id: number;
    name: string;
};

export type Content = {
    id: number;
    para_1: {
        id: number;
        text_0: string;
        strong: string;
        text_1: string;
    }[];
    para_2: {
        id: number;
        text_0: string;
        strong: string;
        text_1: string;
    }[];
};

export type CardItem = {
    id: number;
    title: string;
    points: string;
    type: string;
    person: Person[];
    content: Content[];
    sticker: string;
    image: string;
};
