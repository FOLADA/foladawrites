import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchEssayBySlug } from '../lib/sanity';
import type { Essay } from '../lib/sanity';

export default function EssayPage() {
    const { slug } = useParams<{ slug: string }>();
    const [essay, setEssay] = useState<Essay | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const loadEssay = async () => {
            try {
                setLoading(true);
                const essayData = await fetchEssayBySlug(slug);
                setEssay(essayData);
                if (!essayData) {
                    setError('Essay not found');
                }
            } catch (err) {
                console.error('Error fetching essay:', err);
                setError('Failed to load essay');
            } finally {
                setLoading(false);
            }
        };

        loadEssay();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        );
    }

    if (!essay) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Essay not found</div>
            </div>
        );
    }

    // Function to render Sanity block content
    const renderBlockContent = (content: any[]) => {
        if (!content || !Array.isArray(content)) return null;
        
        return content.map((block: any, index: number) => {
            if (block._type === 'block' && block.children) {
                return (
                    <p key={index} className="mb-4">
                        {block.children.map((child: any, childIndex: number) => (
                            <span 
                                key={childIndex}
                                className={
                                    block.markDefs?.some((mark: any) => mark._type === 'link' && mark._key === child.marks?.[0]) 
                                        ? "text-blue-600 hover:underline" 
                                        : ""
                                }
                            >
                                {child.text}
                            </span>
                        ))}
                    </p>
                );
            }
            return null;
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{essay.title}</h1>
            <div className="prose leading-loose  text-xl prose-lg max-w-none">
                {essay.content ? renderBlockContent(essay.content) : <p>No content available.</p>}
            </div>
            
            <Link to="/" className="mt-10 inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group">
                    <span className="font-medium">Read More Essays</span>
                    <svg 
                        className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                    </svg>
                </Link>

        </div>
        
    );
}