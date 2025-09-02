import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-professional to-professional-light w-10 h-10 rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">CA</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Your Name</h1>
            <p className="text-sm text-muted-foreground">Chartered Accountant</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-professional transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-professional transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-professional transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-professional transition-colors">Contact</a>
        </nav>
        
        <Button variant="professional" className="hidden md:inline-flex">
          Schedule Consultation
        </Button>
      </div>
    </header>
  );
};

export default Header;