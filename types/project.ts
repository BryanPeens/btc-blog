import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: {
        _type: string;
        current: string;
    };
    url: string;
    content: PortableTextBlock[];
    image: {
        alt: string;
        url: string;
        heading: string;
        shortDescription: PortableTextBlock[];
    };
    imageTwo?: {
        alt: string;
        url: string;
        heading: string;
        shortDescription: PortableTextBlock[];
    };
    imageThree?: {
        alt: string;
        url: string;
        heading: string;
        shortDescription: PortableTextBlock[];
    };
    imageFour?: {
        alt: string;
        url: string;
        heading: string;
        shortDescription: PortableTextBlock[];
    };
    imageFive?: {
        alt: string;
        url: string;
        heading: string;
        shortDescription: PortableTextBlock[];
    };
};
