import { fieldNeedsEscape } from "sanity";

export default{
    name: 'essay',
    title: 'Essay',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title of the Essay',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug of the essay',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name:'smalldescription',
            title: 'Small Description of the essay',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content of the essay',
            type: 'array',
            of: [{type: 'block'}],
        }
    ],
}