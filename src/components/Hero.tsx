import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ca-office.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-professional/10 text-professional px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-professional rounded-full"></span>
                <span className="text-sm font-medium">33 Years of Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Professional
                <span className="block bg-gradient-to-r from-professional to-gold bg-clip-text text-transparent">
                  Chartered Accountant
                </span>
                Services
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Providing comprehensive financial solutions with three decades of expertise. 
                Your trusted partner for taxation, auditing, and financial advisory services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="professional" size="lg" className="text-base">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                View Services
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-professional">33+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-professional">500+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-professional">100%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional CA Office" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-professional/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-professional to-gold rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Certified Professional</div>
                  <div className="text-sm text-muted-foreground">Institute of Chartered Accountants of India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;