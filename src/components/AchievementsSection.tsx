
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import AnimatedCounter from './AnimatedCounter';

const AchievementsSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver(0.2);

  const achievements = [
    {
      title: "Hackathon Winner",
      event: "TechCrunch Disrupt Hackathon 2023",
      description: "First place winner for developing an AI-powered accessibility tool that helps visually impaired users navigate websites.",
      impact: "Featured in TechCrunch and reached 10k+ users",
      number: 10000,
      suffix: "+"
    },
    {
      title: "Open Source Contributor",
      event: "React.js Community",
      description: "Active contributor to React ecosystem with 500+ stars on GitHub repositories and contributions to major open source projects.",
      impact: "Downloaded 50k+ times monthly",
      number: 50,
      suffix: "k+"
    },
    {
      title: "Speaker at Tech Conference",
      event: "React Conf 2023",
      description: "Delivered a talk on 'Modern State Management in React' to an audience of 1000+ developers.",
      impact: "1M+ views on YouTube",
      number: 1,
      suffix: "M+"
    },
    {
      title: "Team Lead Recognition",
      event: "Company Annual Awards",
      description: "Led a team of 5 developers to deliver a critical project 2 weeks ahead of schedule, resulting in $2M revenue increase.",
      impact: "15% performance improvement",
      number: 15,
      suffix: "%"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "" },
    { label: "Happy Clients", value: 25, suffix: "+" },
    { label: "Code Commits", value: 1000, suffix: "+" }
  ];

  return (
    <section id="achievements" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
      <motion.div 
        className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Achievements
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Notable accomplishments and recognition in my professional journey.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="mx-auto max-w-[64rem] grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mx-auto max-w-[64rem] space-y-6" ref={ref}>
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ 
              opacity: isIntersecting ? 1 : 0, 
              x: isIntersecting ? 0 : (index % 2 === 0 ? -20 : 20) 
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="relative group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {achievement.event}
                    </CardDescription>
                  </div>
                  <motion.div 
                    className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    <AnimatedCounter 
                      end={achievement.number} 
                      suffix={achievement.suffix}
                      duration={1.5}
                    />
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
