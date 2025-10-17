import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { FileText, Calendar, Award, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const timeline = [
    {
      year: "1990",
      title: "Birth",
      description: "Born on 15 May 1990 in Mathura, Uttar Pradesh"
    },
    {
      year: "2008",
      title: "Political Journey Begins",
      description: "Started political career with Akhil Bharatiya Vidyarthi Parishad (ABVP)"
    },
    {
      year: "2013",
      title: "Joined BJYM",
      description: "Became active member of Bharatiya Janata Yuva Morcha (BJYM)"
    },
    {
      year: "2014",
      title: "State Working Committee",
      description: "Appointed as State Working Committee Member of BJYM Uttar Pradesh"
    },
    {
      year: "2023",
      title: "Director Position",
      description: "Elected as Director of District Co-operative Federation Limited, Mathura"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-light to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              About <span className="gradient-text">Naresh Singh Rajawat</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              A journey of dedication, leadership, and service to the nation
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Early Life & Education
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Naresh Singh Rajawat was born on <strong>15 May 1990</strong> in Mathura, Uttar Pradesh. He comes from a proud Rajput family with deep cultural roots and values.
                </p>
                <p>
                  He completed his <strong>Bachelor of Arts</strong> from Uttar Pradesh Rajarshi Tandon Open University, Allahabad, which laid the foundation for his understanding of social and political dynamics.
                </p>
                <p>
                  From an early age, Naresh displayed a keen interest in public service and nation-building, which eventually led him to pursue a career in politics and social work.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Political Career
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Naresh began his political journey in <strong>2008</strong> with Akhil Bharatiya Vidyarthi Parishad (ABVP), where he actively worked for student welfare and youth empowerment.
                </p>
                <p>
                  In <strong>2013</strong>, he joined Bharatiya Janata Yuva Morcha (BJYM) and worked tirelessly at the grassroots level, connecting with people and understanding their challenges.
                </p>
                <p>
                  On <strong>14 November 2014</strong>, Naresh was appointed as a <strong>State Working Committee Member</strong> of BJYM Uttar Pradesh, recognizing his dedication and leadership qualities.
                </p>
                <p>
                  On <strong>13 June 2023</strong>, he was elected as the <strong>Director of District Co-operative Federation Limited, Mathura</strong>, a significant milestone in his political career.
                </p>
                <p>
                  His focus remains on empowering youth, promoting development, and contributing to nation-building through honest and dedicated service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-primary-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Journey Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block" />
              
              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12 md:ml-20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute -left-12 top-0 hidden md:flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <Card className="p-6 card-glow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-20 md:w-24">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Venture */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 card-glow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Business Leadership
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Beyond politics, Naresh Singh Rajawat is also a successful businessman and the founder of <strong>NSR Construction</strong>. Through his entrepreneurial ventures, he has contributed to infrastructure development and job creation in the region.
              </p>
              <p className="text-lg text-muted-foreground">
                His dual role as a political leader and businessman enables him to understand both governance and economic development, making him a well-rounded leader capable of driving meaningful change.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Russia Visit Document */}
      <section className="py-16 bg-primary-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-6">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              International Engagement
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Naresh Singh Rajawat has represented India in various international forums, strengthening diplomatic ties and promoting cultural exchange.
            </p>
            <Button
              asChild
              size="lg"
              className="btn-hero"
            >
              <a href="/russia-visit-program.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                View Russia Visit Program
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
