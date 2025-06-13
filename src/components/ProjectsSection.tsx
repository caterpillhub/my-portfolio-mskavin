
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ProjectsSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver(0.1);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&h=300",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://task-manager-demo.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      githubUrl: "https://github.com/username/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
      <motion.div 
        className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Featured Projects
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Some of my recent work and personal projects that showcase my skills.
        </p>
      </motion.div>
      
      <div className="mx-auto grid max-w-[64rem] gap-6 md:grid-cols-2 lg:grid-cols-3" ref={ref}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="overflow-hidden h-full group hover:shadow-lg transition-all duration-300 relative">
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>
                </div>
              )}
              
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button size="sm" variant="secondary">
                      <Eye className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: isIntersecting ? 1 : 0, scale: isIntersecting ? 1 : 0.8 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button size="sm" asChild className="w-full">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
