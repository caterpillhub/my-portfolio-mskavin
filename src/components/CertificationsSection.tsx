
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const CertificationsSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver(0.2);

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-12345",
      description: "Demonstrates expertise in developing and maintaining applications on AWS platform."
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-67890",
      description: "Advanced cloud architecture and development skills certification."
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-54321",
      description: "Comprehensive React development and modern frontend practices."
    },
    {
      title: "Scrum Master Certified",
      issuer: "Scrum Alliance",
      date: "2022",
      credentialId: "CSM-98765",
      description: "Agile project management and team leadership certification."
    }
  ];

  return (
    <section id="certifications" className="container space-y-6 py-8 md:py-12 lg:py-24">
      <motion.div 
        className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Certifications
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Professional certifications that validate my expertise and commitment to continuous learning.
        </p>
      </motion.div>
      
      <div className="mx-auto grid max-w-[64rem] gap-6 md:grid-cols-2" ref={ref}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <Card className="relative h-full group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="rounded-lg bg-primary/10 p-2"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Award className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="font-medium">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Badge variant="secondary">{cert.date}</Badge>
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{cert.description}</p>
                <p className="text-sm text-muted-foreground">
                  Credential ID: {cert.credentialId}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
