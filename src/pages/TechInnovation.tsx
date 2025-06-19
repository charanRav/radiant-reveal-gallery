
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechInnovation: React.FC = () => {
  const navigate = useNavigate();

  const projectImages = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
    'https://images.unsplash.com/photo-1562887284-0c12b09aa580?w=800&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
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
            Tech <span className="text-gradient">Innovation Visuals</span>
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2023 - Present</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Silicon Valley Tech Labs</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-4xl">
            Artistic representation of technology concepts through macro photography and digital manipulation, 
            bridging the gap between art and science in the modern digital age.
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
                This innovative project combines macro photography with digital art to visualize abstract 
                technology concepts. By capturing intricate details of circuit boards, processors, and 
                other technological components, I create artistic representations that make complex tech 
                concepts accessible and visually compelling.
              </p>
              <p>
                Each image in this series tells the story of human innovation, from the microscopic 
                transistors that power our devices to the elegant algorithms that drive artificial 
                intelligence. The work bridges the gap between the technical and the artistic.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {projectImages.map((image, index) => (
                <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`Tech innovation ${index + 1}`}
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
                  <p>Tech Innovation Magazine</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Duration</h4>
                  <p>Ongoing Project</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Techniques</h4>
                  <p>Macro photography, Digital manipulation, 3D rendering</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2">Equipment</h4>
                  <p>Macro lenses, LED lighting, Digital art software</p>
                </div>
              </div>

              <Button className="w-full" onClick={() => window.open('https://techinnovation.com/visual-series', '_blank')}>
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

export default TechInnovation;
