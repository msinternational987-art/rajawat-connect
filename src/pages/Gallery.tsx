import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import russiaVisit1 from "@/assets/russia-visit-1.jpg";
import russiaVisit2 from "@/assets/russia-visit-2.jpg";

const Gallery = () => {
  const photos = [
    { src: russiaVisit1, alt: "Russia Visit - International Delegation" },
    { src: russiaVisit2, alt: "Russia Visit - Diplomatic Meeting" },
    { src: gallery1, alt: "Public Event with Senior Leaders" },
    { src: gallery2, alt: "Meeting with Political Leaders" },
    { src: gallery3, alt: "BJP Party Meeting" },
    { src: gallery4, alt: "Traditional Ceremony" },
    { src: gallery5, alt: "Office Meeting" },
    { src: gallery6, alt: "Community Engagement" },
    { src: gallery7, alt: "Meeting with Minister" },
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
              <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              A visual journey of leadership, events, and public service
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="photos" className="flex items-center space-x-2">
                <Image className="h-4 w-4" />
                <span>Photos</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <span>Videos</span>
              </TabsTrigger>
            </TabsList>

            {/* Photo Gallery */}
            <TabsContent value="photos" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 card-glow"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-medium">{photo.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Video Gallery */}
            <TabsContent value="videos" className="animate-fade-in">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* YouTube Channel Embed - Featured Video */}
                  <div className="col-span-full">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed?listType=user_uploads&list=naresh4nation"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  
                  {/* Channel Info */}
                  <div className="col-span-full text-center space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Watch More on YouTube
                    </h3>
                    <p className="text-muted-foreground">
                      Subscribe to our YouTube channel for the latest updates, speeches, and event coverage
                    </p>
                    <a
                      href="https://www.youtube.com/@naresh4nation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                    >
                      <Video className="h-5 w-5" />
                      <span>Visit YouTube Channel</span>
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
