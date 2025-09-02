const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Your Professional Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over three decades of dedicated service in the field of chartered accountancy, 
                I have been helping individuals and businesses navigate the complex world of finance, 
                taxation, and compliance.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My practice is built on the foundation of integrity, expertise, and personalized service. 
                Every client receives tailored solutions that align with their unique financial goals and 
                regulatory requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-professional mb-2">Qualifications</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chartered Accountant (ICAI)</li>
                  <li>• Bachelor of Commerce</li>
                  <li>• Member, Institute of Chartered Accountants of India</li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-professional mb-2">Specializations</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Direct & Indirect Taxation</li>
                  <li>• Statutory & Internal Audits</li>
                  <li>• Corporate Advisory</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-professional/10 to-gold/10 rounded-2xl p-8 border border-professional/20">
              <h3 className="text-2xl font-bold text-professional mb-6">Why Choose My Services?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-professional/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-professional rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Extensive Experience</h4>
                    <p className="text-sm text-muted-foreground">33 years of hands-on experience across diverse industries and business sizes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-professional/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-professional rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Personalized Service</h4>
                    <p className="text-sm text-muted-foreground">Tailored solutions that address your specific financial and business needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-professional/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-professional rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">100% Compliance</h4>
                    <p className="text-sm text-muted-foreground">Ensuring full regulatory compliance with zero compromise on quality</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-professional/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-professional rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Long-term Partnership</h4>
                    <p className="text-sm text-muted-foreground">Building lasting relationships through trust, transparency, and excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;