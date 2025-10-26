import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "We'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-8 bg-muted">
          <div className="container">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="font-inter text-lg text-muted-foreground">
              We'd love to hear from you
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-playfair text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="font-inter text-muted-foreground mb-8">
                  Have questions about our products or want to learn more about our artisans? 
                  Fill out the form and we'll respond as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-playfair font-semibold mb-1">Email</h3>
                      <p className="font-inter text-muted-foreground">hello@kalakriti.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-playfair font-semibold mb-1">Phone</h3>
                      <p className="font-inter text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-playfair font-semibold mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/919876543210" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-inter text-primary hover:underline"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-playfair font-semibold mb-1">Location</h3>
                      <p className="font-inter text-muted-foreground">
                        Mumbai, Maharashtra<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-inter">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-inter">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="font-inter">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      required 
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-inter">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      rows={6}
                      required 
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" className="w-full font-inter">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
