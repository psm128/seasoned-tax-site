const Footer = () => {
  return (
    <footer className="bg-professional text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-gold to-gold-light w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-professional font-bold text-lg">CA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Your Name</h3>
                <p className="text-sm opacity-80">Chartered Accountant</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Providing professional chartered accountancy services for 33 years. 
              Your trusted partner for all financial and taxation needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-gold transition-colors">Tax Planning</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Audit Services</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Business Consultancy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Company Formation</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Financial Advisory</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <span>123 Business District<br />Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>yourname@caservices.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 Your Name - Chartered Accountant. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">Disclaimer</a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs opacity-60">
              Membership No: [Your ICAI Number] | Registration No: [Your Registration Number]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;