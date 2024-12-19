
export interface ICarouselModalPost {
    id: number;
    slug: string;
    title: string;
    storyItem: IStory[];
}

export interface IStory { title: string; text: string; image: string }