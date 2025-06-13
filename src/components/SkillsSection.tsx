
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const SkillsSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver(0.2);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Firebase", level: 85 },
        { name: "Vercel", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 80 }
      ]
    }
  ];

  const softSkills = ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Agile/Scrum"];

  return (
    <section id="skills" className="container space-y-6 py-8 md:py-12 lg:py-24">
      <motion.div 
        className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Skills & Technologies
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Technologies and tools I use to bring ideas to life.
        </p>
      </motion.div>
      
      <div className="mx-auto max-w-[64rem] space-y-8" ref={ref}>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : -20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold">{category.category}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 10 }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={isIntersecting ? skill.level : 0} 
                    className="h-2 transition-all duration-1000 ease-out"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isIntersecting ? 1 : 0, scale: isIntersecting ? 1 : 0.8 }}
                transition={{ duration: 0.3, delay: 0.5 + (skillIndex * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
