import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Project } from "@/types/project";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { project: string };
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project: Project = await getProject(slug);

    return (
        <div className=" sm:max-w-[99%] md:max-w-[95%] md:px-5 lg:max-w-[77%] bg-center mx-auto">
            <header className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-slate-500 via-green-300 to-blue-600 bg-clip-text text-transparent md:text-3xl sm:text-3xl lg:text-4xl drop-shadow font-extrabold py-2">{project.name}</h1>
            </header>

            {/* content goes here */}
            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content as PortableTextBlock[]} />
            </div>

            {/* image goes here */}
            <div className="mt-10">
                {project.image && (
                    <div className="mb-8">
                        <PortableText value={project.image.shortDescription as PortableTextBlock[]} />
                        <Image src={project.image.url} alt={project.image.alt} width={1920} height={1080} className="mt-4 object-cover rounded-sm" />
                    </div>
                )}
                {project.imageTwo && (
                    <div className="mb-8">
                        <PortableText value={project.imageTwo.shortDescription as PortableTextBlock[]} />
                        <Image src={project.imageTwo.url} alt={project.imageTwo.alt} width={1920} height={1080} className="mt-4 object-cover rounded-sm" />
                    </div>
                )}
                {project.imageThree && (
                    <div className="mb-8">
                        <PortableText value={project.imageThree.shortDescription as PortableTextBlock[]} />
                        <Image src={project.imageThree.url} alt={project.imageThree.alt} width={1920} height={1080} className="mt-4 object-cover rounded-sm" />
                    </div>
                )}
                {project.imageFour && (
                    <div className="mb-8">
                        <PortableText value={project.imageFour.shortDescription as PortableTextBlock[]} />
                        <Image src={project.imageFour.url} alt={project.imageFour.alt} width={1920} height={1080} className="mt-4 object-cover rounded-sm" />
                    </div>
                )}
                {project.imageFive && (
                    <div className="mb-8">
                        {/* <h2 className="text-2xl font-bold mb-2">{project.imageFive.heading}</h2> */}
                        <PortableText value={project.imageFive.shortDescription as PortableTextBlock[]} />
                        <Image src={project.imageFive.url} alt={project.imageFive.alt} width={1920} height={1080} className="mt-4 object-cover rounded-sm" />
                    </div>
                )}
            </div>
        </div>
    );
}
