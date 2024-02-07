import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600
            bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>

      <div
        className="mt-5 font-bold text-gray-700 bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600 
        bg-clip-text text-transparent mx-auto "
      >
        <PortableText value={page.content} />
      </div>

      <Image
        src={page.image}
        alt={page.title}
        width={1920} // or width={1080} if you want a maximum width of 1080 pixels
        height={1080}
        className="mt-4 object-cover rounded-sm"
      />
    </div>
  );
}
