import { createClient } from "@sanity/client";

// TypeScript interfaces for Sanity content types
export interface Essay {
  title: string;
  smalldescription?: string;
  currentSlug: string;
  content?: any[]; // Added content field
}

// Sanity client configuration
const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'eybg4zvv',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: import.meta.env.VITE_SANITY_TOKEN, // Add authentication token
});

// GROQ queries following project standards
export const queries = {
  getAllEssays: `
    *[_type == "essay" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
      title,
      smalldescription,
      "currentSlug": slug.current
    }
  `,
  getEssayBySlug: `
    *[_type == "essay" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      title,
      smalldescription,
      "currentSlug": slug.current,
      content
    }
  `
};

// Helper functions for data fetching
export const fetchAllEssays = async (): Promise<Essay[]> => {
  try {
    return await client.fetch(queries.getAllEssays);
  } catch (error) {
    console.error('Error fetching essays:', error);
    throw error;
  }
};

export const fetchEssayBySlug = async (slug: string): Promise<Essay | null> => {
  try {
    return await client.fetch(queries.getEssayBySlug, { slug });
  } catch (error) {
    console.error('Error fetching essay by slug:', error);
    throw error;
  }
};

// Named export for client
export { client };

// Default export for backwards compatibility
export default client;