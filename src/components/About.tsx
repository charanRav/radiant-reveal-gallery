
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&q=80"
                    alt="Portfolio Artist"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 glass-effect rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  About <span className="text-gradient">Me</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm a passionate visual artist and photographer with over 5 years of experience 
                  creating compelling digital experiences. My work focuses on capturing the beauty 
                  in everyday moments and transforming them into extraordinary visual stories.
                </p>
                
                <p>
                  Specializing in nature photography, architectural documentation, and technology 
                  visualization, I believe that every image has the power to evoke emotion and 
                  inspire action. My approach combines technical precision with creative vision.
                </p>

                <p>
                  When I'm not behind the camera, you'll find me exploring new technologies, 
                  experimenting with digital art techniques, or sharing knowledge with the 
                  creative community through workshops and mentorship.
                </p>
              </div>

              {/* Skills */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Specializations</h3>
                <div className="flex flex-wrap gap-3">
                  {['Photography', 'Digital Art', 'Visual Design', 'Post-Processing', 'Art Direction', 'Creative Strategy'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 glass-effect rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
