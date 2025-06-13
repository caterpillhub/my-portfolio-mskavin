
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <motion.div 
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <div className="h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-4 border-border">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQH_f-Xc8NsNuA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726232810918?e=1755129600&v=beta&t=6R5WTaCvmu9KgH36dHkmbfgDWXromCEe7HmR9ABTfIk"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div 
              className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-green-500 border-2 border-background"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <div className="flex-1">
            <motion.h1 
              className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm <span className="text-primary">Kavin Rrahul</span>
            </motion.h1>
            
            <motion.p 
              className="max-w-[750px] text-lg text-muted-foreground sm:text-xl mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full Stack Developer passionate about creating innovative solutions and building exceptional user experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="h-10">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="h-10">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
