import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Tax Planning & Compliance",
      description: "Comprehensive tax advisory services including GST, Income Tax, and TDS compliance",
      features: ["GST Registration & Returns", "Income Tax Returns", "Tax Planning Strategies", "TDS Compliance"]
    },
    {
      title: "Audit & Assurance",
      description: "Professional auditing services ensuring compliance and financial accuracy",
      features: ["Statutory Audits", "Internal Audits", "GST Audits", "Concurrent Audits"]
    },
    {
      title: "Business Consultancy",
      description: "Strategic business advice for growth and operational efficiency",
      features: ["Business Setup", "Financial Planning", "Investment Advisory", "Risk Management"]
    },
    {
      title: "Accounting Services",
      description: "Complete bookkeeping and accounting solutions for businesses",
      features: ["Bookkeeping", "Financial Statements", "Management Reporting", "Payroll Processing"]
    },
    {
      title: "Company Formation",
      description: "End-to-end company incorporation and registration services",
      features: ["Private Limited Company", "LLP Registration", "Partnership Firm", "Proprietorship"]
    },
    {
      title: "Financial Advisory",
      description: "Expert financial guidance for personal and business growth",
      features: ["Investment Planning", "Retirement Planning", "Wealth Management", "Loan Advisory"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive CA Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Offering a complete range of chartered accountancy services with 33 years of professional expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-professional">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-professional rounded-full mr-3"></span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;