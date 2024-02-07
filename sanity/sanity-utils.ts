import { Project } from "@/types/project";
import { Page } from "@/types/Page";
import { Hero } from "@/types/Hero";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// Return an array of projects
export async function getProjects(): Promise<Project[]> {
    try {
        const response = await createClient(clientConfig).fetch(
            groq`*[_type == "project"]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                url,
                content,
                "image": {
                    "alt": image.alt,
                    "url": image.asset->url,
                    "heading": image.heading,
                    "shortDescription": image.shortDescription
                },
                "imageTwo": {
                    "alt": imageTwo.alt,
                    "url": imageTwo.asset->url,
                    "heading": imageTwo.heading,
                    "shortDescription": imageTwo.shortDescription
                },
                "imageThree": {
                    "alt": imageThree.alt,
                    "url": imageThree.asset->url,
                    "heading": imageThree.heading,
                    "shortDescription": imageThree.shortDescription
                },
                "imageFour": {
                    "alt": imageFour.alt,
                    "url": imageFour.asset->url,
                    "heading": imageFour.heading,
                    "shortDescription": imageFour.shortDescription
                },
                "imageFive": {
                    "alt": imageFive.alt,
                    "url": imageFive.asset->url,
                    "heading": imageFive.heading,
                    "shortDescription": imageFive.shortDescription
                }
            }`
        );
        return response;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
}

// Return a single project
export async function getProject(slug: string): Promise<Project> {
    try {
        const response = await createClient(clientConfig).fetch(
            groq`*[_type == "project" && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                url,
                content,
                "image": {
                    "alt": image.alt,
                    "url": image.asset->url,
                    "heading": image.heading,
                    "shortDescription": image.shortDescription
                },
                "imageTwo": {
                    "alt": imageTwo.alt,
                    "url": imageTwo.asset->url,
                    "heading": imageTwo.heading,
                    "shortDescription": imageTwo.shortDescription
                },
                "imageThree": {
                    "alt": imageThree.alt,
                    "url": imageThree.asset->url,
                    "heading": imageThree.heading,
                    "shortDescription": imageThree.shortDescription
                },
                "imageFour": {
                    "alt": imageFour.alt,
                    "url": imageFour.asset->url,
                    "heading": imageFour.heading,
                    "shortDescription": imageFour.shortDescription
                },
                "imageFive": {
                    "alt": imageFive.alt,
                    "url": imageFive.asset->url,
                    "heading": imageFive.heading,
                    "shortDescription": imageFive.shortDescription
                }
            }`,
            { slug }
        );
        return response;
    } catch (error) {
        console.error("Error fetching project:", error);
        throw error;
    }
}

// Return an array of pages
export async function getPages(): Promise<Page[]> {
    try {
        const response = await createClient(clientConfig).fetch(
            groq`*[_type == "page"]{
                _id,
                _createdAt,
                title,
                "slug": slug.current,
            }`
        );
        return response;
    } catch (error) {
        console.error("Error fetching pages:", error);
        throw error;
    }
}

// Return a single page
export async function getPage(slug:string): Promise<Page> {
    try {
        const response = await createClient(clientConfig).fetch(
            groq`*[_type == "page" && slug.current == $slug][0]{
                _id,
                _createdAt,
                title,
                "slug": slug.current,
                content,
                description,
                "image": image.asset->url,
            }`,
            { slug }
        );
        return response;
    } catch (error) {
        console.error("Error fetching page:", error);
        throw error;
    }
}

// Return a single hero section
export async function getHero(slug: string): Promise<Hero> {
    try {
        const response = await createClient(clientConfig).fetch(
            groq`*[_type == "hero" && slug.current == $slug][0]{
                _id,
                _createdAt,
                name,
                "slug": slug.current,
                "heroGallery": heroGallery[]{
                    "type": "image",
                    "options": {
                        "hotspot": true
                    },
                    "asset": {
                        "url": @.asset->url
                    }
                },
                url,
                heroContent
            }`,
            { slug }
        );
        console.log(response); // Log the response to check its structure
        return response;
    } catch (error) {
        console.error("Error fetching hero:", error);
        throw error; // Rethrow the error to be caught in the calling code
    }
}
