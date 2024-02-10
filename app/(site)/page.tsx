import { getProjects, getHero } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./HeroSection";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="sm:max-w-[99%] sm:px-5 md:max-w-[95%] md:px-5 lg:max-w-[87%] bg-center mx-auto">
      <HeroSection />
      <h2
        className="mt-10 font-bold text-gray-700 text-3xl bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600 
        bg-clip-text text-transparent mx-auto text-center">
        Hey there, Story Seekers!
      </h2>

      <p
        className="mt-5 font-bold text-gray-700 bg-gradient-to-r from-gray-400 via-teal-300 to-indigo-600 
        bg-clip-text text-transparent mx-auto text-center">
        Welcome to a world where every tale holds a spark of inspiration, a
        nugget of wisdom, and a touch of magic. At Bridging The Canyon, we
        believe in the power of stories to ignite imagination, foster
        connections, and drive positive change.
      </p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-300 p-2 rounded-sm overflow-hidden hover:shadow-xl hover:rotate-3 hover:bg-white transition-transform duration-300 ease-in-out transform"
          >
            {project.image && (
              <Image
                src={project.image.url}
                alt={project.image.alt}
                width={1920}
                height={1080}
                className="object-cover w-full h-48 md:h-64 rounded-t-md"
              />
            )}
            <div className="p-4">
              <h3
                className="text-lg font-semibold mb-2 bg-gradient-to-r from-slate-500 via-green-300 to-blue-600
                bg-clip-text text-transparent">
                {project.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
