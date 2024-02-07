
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'f1w6szxa',
    dataset: 'production',
    title: 'Bridging The Canyon',
    apiVersion: '2024-02-05',
    basePath: '/admin',
    plugins: [structureTool()],
    schema: {types: schemas},
});

export default config;
