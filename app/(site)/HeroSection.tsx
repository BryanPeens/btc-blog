import { getProjects, getHero } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

interface HeroGalleryImage {
  asset: {
    url: string;
  };
}

interface HeroData {
  _id: string;
  name: string;
  heroGallery: HeroGalleryImage[];
}

const renderHeroImage = (
  src: string,
  alt: string,
  width: number,
  height: number
): JSX.Element => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="drop w-full h-full mx-auto absolute inset-x-0 top-0 flex items-center justify-center p-1 rounded-full"
  />
);

export default async function HeroSection() {
  const slug = "bridgingthecanyon";
  const hero = await getHero(slug);

  console.log(hero.heroGallery[0].asset.url);
  const gridColSize = hero.heroGallery.length;

  return (
    <div className="bg-slate-800 text-white py-20 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-last md:order-first md:mt-0 drop-container mx-auto">
            {hero?.heroGallery &&
              hero.heroGallery.map((galleryItem, index) => (
                <div
                  key={index}
                  className={`h-[${index === 0 ? "320px" : "100px"}] w-[100px] h-[100px] flex`}
                >
                  {renderHeroImage(galleryItem.asset.url, hero.name, 50, 50)}
                </div>
              ))}
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {hero.name}
            </h1>
            <PortableText  value={hero.heroContent as PortableTextBlock[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
