
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NatureDocumentary: React.FC = () => {
  const navigate = useNavigate();

  const projectImages = [
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
    'https://images.unsplash.com/photo-1464822759844-d150b88fadc1?w=800&q=80',
    'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            Nature <span className="text-gradient">Documentary Series</span>
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2023 - 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Global Project</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-4xl">
            A comprehensive visual documentation of endangered ecosystems across three continents, 
            featuring over 200 high-resolution photographs capturing the raw beauty and fragility of our natural world.
          </p>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p>
                This ambitious project took me across three continents over the span of 18 months, 
                documenting some of the world's most endangered ecosystems. From the Amazon rainforest 
                to the Arctic tundra, each photograph tells a story of natural beauty under threat.
              </p>
              <p>
                The series aims to raise awareness about climate change and habitat destruction while 
                celebrating the incredible diversity of life on our planet. Using advanced photography 
                techniques and spending weeks in remote locations, I captured intimate moments between 
                wildlife and their rapidly changing environments.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {projectImages.map((image, index) => (
                <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`Nature documentary ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Client</h4>
                  <p>National Geographic Society</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Duration</h4>
                  <p>18 Months</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Locations</h4>
                  <p>Amazon Basin, Arctic Circle, African Savanna</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Equipment</h4>
                  <p>Canon EOS R5, Sony α7R IV, Various telephoto lenses</p>
                </div>
              </div>

              <Button className="w-full" onClick={() => window.open('https://natgeo.com/nature-series', '_blank')}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Series
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureDocumentary;
