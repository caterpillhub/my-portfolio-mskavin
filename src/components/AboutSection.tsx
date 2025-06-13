
import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AboutSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver(0.3);

  const features = [
    {
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding innovative solutions through code."
    },
    {
      title: "Team Player",
      description: "Collaborative approach to development with strong communication skills."
    },
    {
      title: "Continuous Learner",
      description: "Always staying updated with the latest technologies and best practices."
    }
  ];

  return (
    <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-24">
      <motion.div 
        className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          About Me
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          I'm a passionate software developer with expertise in modern web technologies. 
          I love solving complex problems and creating efficient, scalable solutions that make a difference.
        </p>
      </motion.div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3" ref={ref}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-background p-6 group hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex h-[180px] flex-col justify-between">
              <div className="space-y-2">
                <motion.h3 
                  className="font-bold group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
