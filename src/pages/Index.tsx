import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navbar />
      
      {/* Main content area */}
      <main className="pt-16">
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="font-playfair text-5xl md:text-7xl font-bold text-primary leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  FoladaWrites
                </span>
              </h2>
              
              <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Where words meet artistry and stories come to life
              </p>
              
              <div className="pt-8">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-accent/20 to-accent/10">
                  <div className="bg-background rounded-full px-8 py-4">
                    <p className="font-inter text-sm text-muted-foreground">
                      Crafting elegant narratives with precision and passion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
