import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '4v5p3kvl',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

const builder = imageBuilder(client);

export const urlFor = (source: any) => builder.image(source);

export default client;
