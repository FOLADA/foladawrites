import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { client, type Essay } from '../lib/sanity';

const EssaysSection = () => {
  const [essays, setEssays] = useState<Essay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEssays = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const query = `
          *[_type == "essay" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
            title,
            smalldescription,
            "currentSlug": slug.current
          }
        `;
        
        const data = await client.fetch(query);
        setEssays(data || []);
      } catch (err: any) {
        console.error('Error fetching essays:', err);
        
        let errorMessage = 'Failed to load essays. Please try again later.';
        
        if (err.message?.includes('fetch')) {
          errorMessage = 'Network error: Cannot connect to Sanity. Check your internet connection.';
        } else if (err.message?.includes('unauthorized') || err.message?.includes('401')) {
          errorMessage = 'Authentication error: Check your Sanity project credentials.';
        } else if (err.message?.includes('404')) {
          errorMessage = 'Project not found: Check your Sanity project ID and dataset.';
        } else if (err.message?.includes('GROQ')) {
          errorMessage = 'Query error: There\'s an issue with the data query.';
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchEssays();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Thoughts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-muted rounded-lg h-48 mb-4"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-destructive mb-4">Oops! Something went wrong</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            The Thoughts of Mine
          </h2>
        </div>

        {/* Essays List */}
        {essays.length > 0 ? (
          <div className="space-y-6">
            {essays.map((essay, index) => (
              <article 
                key={essay.currentSlug || index} 
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/20 w-full"
              >
                {/* Card Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {essay.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {essay.smalldescription}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-end">
                    <Link
                      to={`/essay/${essay.currentSlug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-muted/50 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-2">Nothing Found</h3>
              <p className="text-muted-foreground">
                Check back soon for new content!
              </p>
            </div>
          </div>
        )}

        {/* View All Button */}
        {essays.length > 6 && (
          <div className="text-center mt-12">
            <Link
              to="/essays"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default EssaysSection;
