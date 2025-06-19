
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Nature Documentary Series',
      description: 'A comprehensive visual documentation of endangered ecosystems across three continents, featuring over 200 high-resolution photographs.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
      technologies: ['Photography', 'Post-Processing', 'Storytelling'],
      portfolioUrl: '/portfolio/nature-documentary'
    },
    {
      id: 2,
      title: 'Urban Architecture Collection',
      description: 'Modern architectural photography showcasing the intersection of design, functionality, and urban planning in major metropolitan areas.',
      image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&q=80',
      technologies: ['Architecture', 'Composition', 'Urban Design'],
      portfolioUrl: '/portfolio/urban-architecture'
    },
    {
      id: 3,
      title: 'Tech Innovation Visuals',
      description: 'Artistic representation of technology concepts through macro photography and digital manipulation, bridging the gap between art and science.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
      technologies: ['Macro Photography', 'Digital Art', 'Technology'],
      portfolioUrl: '/portfolio/tech-innovation'
    }
  ];

  const handleViewProject = (portfolioUrl: string) => {
    window.open(portfolioUrl, '_blank');
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of my most impactful work, showcasing diverse techniques and creative approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-foreground/5"
                    onClick={() => handleViewProject(project.portfolioUrl)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
