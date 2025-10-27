import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchEssayBySlug } from '../lib/sanity';
import type { Essay } from '../lib/sanity';
import { ArrowLeft, Home, BookOpen } from 'lucide-react';

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
            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border text-foreground rounded-lg hover:bg-accent transition-colors duration-200"
                >
                    <Home className="w-4 h-4" />
                    Home
                </Link>
                <Link 
                    to="/#essays" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border text-foreground rounded-lg hover:bg-accent transition-colors duration-200"
                >
                    <BookOpen className="w-4 h-4" />
                    All Essays
                </Link>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{essay.title}</h1>
            <div className="prose leading-loose  text-xl prose-lg max-w-none">
                {essay.content ? renderBlockContent(essay.content) : <p>No content available.</p>}
            </div>
            
            {/* Back to Essays Button */}
            <div className="mt-10">
                <Link 
                    to="/#essays" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Essays
                </Link>
            </div>
        </div>
    );
}