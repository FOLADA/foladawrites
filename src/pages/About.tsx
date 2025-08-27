import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="font-elegant text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight">
              About
            </h1>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-light">
                I'm <span className="text-foreground font-normal">Saba Folashvili</span>, a polymath.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground/60 font-light italic">
                Connect with me on LinkedIn, or don't, as you wish.
              </p>
            </div>
          </div>

          {/* LinkedIn Link */}
          <div className="pt-4">
            <a 
              href="https://www.linkedin.com/in/crusadersf/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 
                        text-sm md:text-base font-light
                        text-muted-foreground hover:text-foreground 
                        transition-all duration-300 ease-out
                        border-b border-muted-foreground/20 hover:border-foreground/40
                        pb-1 group"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;