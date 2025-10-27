import { ExternalLink, Github, Linkedin, Facebook, Twitter, Home, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { effectiveTheme } = useTheme();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/crusadersf/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61581608920067',
      icon: Facebook,
      color: 'hover:text-blue-800'
    },
    {
      name: 'GitHub',
      url: 'https://www.github.com/FOLADA',
      icon: Github,
      color: 'hover:text-gray-800'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/FoladaCodes',
      icon: Twitter,
      color: 'hover:text-black dark:hover:text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-elegant text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col items-center justify-center col-span-1 lg:col-span-3">
            <h3 className="font-serif text-xl md:text-2xl text-center">
              I'm <span className="font-bold">Saba Foladashvili</span>, a polymath who sometimes writes
            </h3>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Find Me Online</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group ${
                    effectiveTheme === 'dark' ? 'hover:bg-muted/50' : 'hover:bg-primary/5'
                  }`}
                >
                  <div className={`p-3 rounded-full mb-4 ${
                    effectiveTheme === 'dark' ? 'bg-muted' : 'bg-primary/10'
                  }`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{link.name}</h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
         {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link 
            to="/#essays" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border text-foreground rounded-lg hover:bg-accent transition-colors duration-200"
          >
            <BookOpen className="w-4 h-4" />
            Read Essays
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;