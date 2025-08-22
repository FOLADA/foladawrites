import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-2xl md:text-3xl font-semibold text-primary tracking-wide hover:text-accent transition-colors duration-300 cursor-pointer">
              FoladaWrites
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;