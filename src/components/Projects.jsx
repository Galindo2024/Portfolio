import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Projects = () => {
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const projects = [
    {
      id: 1,
      title: "Anime Streaming Site",
      description: "A website for watching free anime.",
      image: "anime.jpg",
      details: (
        <a href="https://galindo2024.github.io/Midterm_project/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-blue-400 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300">
            My Github
          </Button>
        </a>
      ),
      tech: ["React", "Hooks"],
    },
    {
      id: 2,
      title: "Music Lyrics Viewer",
      description: "Music video with lyrics.",
      image: "Video with Lyrics.png",
      details: (
        <a href="https://galindo2024.github.io/mediafile/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-blue-400 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300">
            My Github
          </Button>
        </a>
      ),
      tech: ["React", "State Management"],
    },
  ];

  return (
    <div className="space-y-8 p-6 min-h-screen bg-transparent">
      <motion.h2 
        className="text-3xl font-bold text-center text-indigo-800 mb-8 drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>
      <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <Card
              className="shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-indigo-300 rounded-2xl bg-white/80 backdrop-blur-md overflow-hidden" // Adjusted card background to bg-white/80 for better leaf visibility
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-t-2xl border-b-2 border-indigo-200"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-indigo-600 text-white rounded-full shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <CardHeader className="pb-4 pt-6">
                <CardTitle className="text-xl text-indigo-700 text-center">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="mb-4 text-gray-700 text-center">{project.description}</p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => toggleExpand(project.id)}
                    variant="outline"
                    className="flex items-center space-x-2 border-indigo-400 text-indigo-600 hover:bg-indigo-50 transition-all duration-300 rounded-full px-4 py-2"
                  >
                    <span>
                      {expandedIds.has(project.id) ? "Hide Details" : "Show Details"}
                    </span>
                    <span className="text-lg transition-transform duration-300">
                      {expandedIds.has(project.id) ? "▲" : "▼"}
                    </span>
                  </Button>
                </div>
                {expandedIds.has(project.id) && (
                  <motion.div 
                    className="mt-4 p-4 bg-indigo-50 rounded-lg animate-fade-in border border-indigo-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-center">
                      {project.details}
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
