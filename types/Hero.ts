import { PortableTextBlock } from "sanity";

export type HeroGalleryImage = {
  type: 'image';
  options: {
    hotspot: boolean;
  };
  asset: {
    url: string;
  };
};

export type Hero = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  heroGallery: HeroGalleryImage[];
  url: string;
  heroContent: PortableTextBlock[];
  description: string;
};
