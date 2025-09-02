import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-professional/5 to-gold/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take control of your finances? Let's discuss how I can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-professional">Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-professional/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-professional text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Office Address</h4>
                    <p className="text-muted-foreground">
                      123 Business District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-professional/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-professional text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-professional/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-professional text-sm">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">yourname@caservices.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-professional/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-professional text-sm">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-professional">Professional Memberships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-professional rounded-full"></span>
                    <span className="text-foreground">Institute of Chartered Accountants of India (ICAI)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-professional rounded-full"></span>
                    <span className="text-foreground">Registered with GST & Income Tax Department</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-professional rounded-full"></span>
                    <span className="text-foreground">Member, Indian Accounting Association</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-professional">Schedule a Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-professional focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-professional focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-professional focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-professional focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Service Required</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-professional focus:border-transparent">
                  <option>Select a service</option>
                  <option>Tax Planning & Compliance</option>
                  <option>Audit & Assurance</option>
                  <option>Business Consultancy</option>
                  <option>Accounting Services</option>
                  <option>Company Formation</option>
                  <option>Financial Advisory</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-professional focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <Button variant="professional" size="lg" className="w-full">
                Schedule Free Consultation
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll get back to you within 24 hours to schedule your consultation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;