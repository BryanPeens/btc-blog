const hero = {
    name: 'hero',
    title: 'Heroes',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
        },
        {
            name: 'heroGallery',
            title: 'HeroGallery',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string',
        },
        {
            name: 'heroContent',
            title: 'Hero Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'description', 
            title: 'Description', 
            type: 'string'
        },
    ],
};

export default hero;
