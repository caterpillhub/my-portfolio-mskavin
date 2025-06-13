
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const EducationSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver(0.3);

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      description: "Graduated with honors. Focus on software engineering, algorithms, and data structures.",
      gpa: "3.8/4.0"
    },
    {
      degree: "High School Diploma",
      institution: "High School Name",
      period: "2014 - 2018",
      description: "Valedictorian with strong focus on mathematics and science.",
      gpa: "4.0/4.0"
    }
  ];

  return (
    <section id="education" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
      <motion.div 
        className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Education
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          My academic journey and the foundation of my technical knowledge.
        </p>
      </motion.div>
      
      <div className="mx-auto max-w-[64rem] space-y-6" ref={ref}>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ 
              opacity: isIntersecting ? 1 : 0, 
              x: isIntersecting ? 0 : (index % 2 === 0 ? -20 : 20) 
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="relative group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium">
                      {edu.institution}
                    </CardDescription>
                  </div>
                  <motion.div 
                    className="text-sm text-muted-foreground mt-2 md:mt-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.period}
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{edu.description}</p>
                <p className="text-sm font-medium">GPA: {edu.gpa}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
