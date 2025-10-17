import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    toast.success("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary-light to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              We're here to listen and help. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 card-glow animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full btn-hero">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <Card className="p-6 card-glow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      27-S, Girdharpur, Goverdhan Road<br />
                      Krishna Nagar, Mathura<br />
                      Uttar Pradesh - 281004
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-glow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                    <a href="tel:+918630539143" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 8630539143
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-glow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/918630539143" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8630539143
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-glow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a href="mailto:support@focuscodelabs.com" className="text-muted-foreground hover:text-primary transition-colors">
                      support@focuscodelabs.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 card-glow">
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect on Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.facebook.com/naresh4nation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1877F2] hover:bg-[#0d5dbf] text-white rounded-lg transition-all transform hover:scale-110"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/naresh4nation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] hover:opacity-90 text-white rounded-lg transition-all transform hover:scale-110"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.twitter.com/naresh4nation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#000000] hover:bg-[#333333] text-white rounded-lg transition-all transform hover:scale-110"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.youtube.com/@naresh4nation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-lg transition-all transform hover:scale-110"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-primary-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Find Us on Map
          </h2>
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.8943892!2d77.6789!3d27.3333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIwJzAwLjAiTiA3N8KwNDAnNDQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
