
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {visionTool} from '@sanity/vision';

import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'f1w6szxa',
    dataset: 'production',
    title: 'Bridging The Canyon',
    apiVersion: '2024-02-05',
    basePath: '/admin',
    plugins: [structureTool(), visionTool()],
    schema: {types: schemas},
});

export default config;
