import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: "50nsmgba",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true

})