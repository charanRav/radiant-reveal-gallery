
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UrbanArchitecture: React.FC = () => {
  const navigate = useNavigate();

  const projectImages = [
    'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    'https://images.unsplash.com/photo-1520637836862-4d197d17c11a?w=800&q=80',
    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&q=80'
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
            Urban <span className="text-gradient">Architecture Collection</span>
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2022 - 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Major Metropolitan Areas</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-4xl">
            Modern architectural photography showcasing the intersection of design, functionality, 
            and urban planning in major metropolitan areas around the world.
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
                This collection explores the evolution of urban architecture in the 21st century, 
                focusing on how modern designers balance aesthetic appeal with functional necessity. 
                Each photograph captures the unique character of buildings that define our city skylines.
              </p>
              <p>
                From glass and steel skyscrapers that reach toward the clouds to innovative residential 
                complexes that redefine urban living, this series documents the architectural marvels 
                that shape our daily urban experience.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {projectImages.map((image, index) => (
                <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`Urban architecture ${index + 1}`}
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
                  <p>Architectural Digest</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Duration</h4>
                  <p>12 Months</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Cities</h4>
                  <p>New York, Tokyo, Dubai, London, Singapore</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Focus</h4>
                  <p>Modern skyscrapers, residential design, public spaces</p>
                </div>
              </div>

              <Button className="w-full" onClick={() => window.open('https://architecturaldigest.com/urban-collection', '_blank')}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbanArchitecture;
