import { ExternalLink, Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
          {/* Profile Image Placeholder */}
          <div className="lg:col-span-1 flex justify-center">
            <div className={`w-64 h-64 rounded-full overflow-hidden border-4 ${
              effectiveTheme === 'dark' ? 'border-muted' : 'border-primary/20'
            }`}>
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-muted flex items-center justify-center">
                <span className="text-6xl font-elegant text-primary/30">S</span>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-elegant text-3xl md:text-4xl font-light text-foreground">
              Saba Folashvili
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
                I'm a <span className="text-foreground font-normal">polymath</span> with a passion for writing, technology, and creative problem-solving. 
                My journey spans across multiple disciplines, allowing me to approach challenges from unique perspectives.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground/70 leading-relaxed font-light">
                Through FoladaWrites, I share essays that explore the intersections of technology, philosophy, 
                and human experience. My work aims to bridge the gap between complex ideas and accessible understanding.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground/60 font-light italic">
                Connect with me on social media, or don't, as you wish.
              </p>
            </div>
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

        {/* Philosophy Section */}
        <div className={`rounded-2xl p-8 ${
          effectiveTheme === 'dark' ? 'bg-muted/30' : 'bg-primary/5'
        }`}>
          <h3 className="font-elegant text-2xl md:text-3xl font-light text-foreground mb-6">
            My Writing Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-foreground mb-3">Clarity Through Complexity</h4>
              <p className="text-muted-foreground leading-relaxed">
                I believe in making complex ideas accessible without oversimplifying them. 
                True understanding comes from grappling with nuance, not avoiding it.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-foreground mb-3">Interdisciplinary Approach</h4>
              <p className="text-muted-foreground leading-relaxed">
                My essays draw from multiple fields—technology, philosophy, literature, and science—
                to offer fresh perspectives on familiar topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;