const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {source: "name"}
        },
        {
            name: "url",
            title: "URL",
            type: "url"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{type: "block"}]
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {hotspot: true},
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                },
                {
                    name: "heading",
                    title: "Heading",
                    type: "string"
                },
                {
                    name: "shortDescription",
                    title: "Short Description",
                    type: 'array',
                    of: [{ type: 'block' }],
                }
            ]
        },
        {
            name: "imageTwo",
            title: "Image Two",
            type: "image",
            options: {hotspot: true},
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                },
                {
                    name: "heading",
                    title: "Heading",
                    type: "string"
                },
                {
                    name: "shortDescription",
                    title: "Short Description",
                    type: 'array',
                    of: [{ type: 'block' }],
                }
            ]
        },
        {
            name: "imageThree",
            title: "Image Three",
            type: "image",
            options: {hotspot: true},
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                },
                {
                    name: "heading",
                    title: "Heading",
                    type: "string"
                },
                {
                    name: "shortDescription",
                    title: "Short Description",
                    type: 'array',
                    of: [{ type: 'block' }],
                }
            ]
        },
        {
            name: "imageFour",
            title: "Image Four",
            type: "image",
            options: {hotspot: true},
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                },
                {
                    name: "heading",
                    title: "Heading",
                    type: "string"
                },
                {
                    name: "shortDescription",
                    title: "Short Description",
                    type: 'array',
                    of: [{ type: 'block' }],
                }
            ]
        },
        {
            name: "imageFive",
            title: "Image Five",
            type: "image",
            options: {hotspot: true},
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                },
                {
                    name: "heading",
                    title: "Heading",
                    type: "string"
                },
                {
                    name: "shortDescription",
                    title: "Short Description",
                    type: 'array',
                    of: [{ type: 'block' }],
                }
            ]
        },
    ],
};

export default project;
