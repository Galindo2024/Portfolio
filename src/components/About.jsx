import React from "react";
import { Card, CardContent } from "./ui/card";
import { FaReact, FaDatabase, FaJava, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex items-center justify-center p-6 relative overflow-hidden min-h-screen bg-transparent">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Card className="max-w-2xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-pink-300 rounded-3xl bg-white/80">
          <CardContent className="p-6">
            <motion.h2 
              className="font-bold font-serif mb-4 text-center text-purple-700"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            
            <div className="flex items-center mb-6">
              
              <p className="text-gray-700 leading-relaxed font-bold font-serif text-lg">
                I'm a passionate web developer with a love for anime and creative coding. I enjoy building interactive apps and exploring new technologies!
              </p>
            </div>
            <h3 className="text-2xl font-bold font-serif mb-4 text-purple-600">Skills</h3>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-center p-3 bg-purple-50 rounded-lg shadow-sm hover:bg-purple-100 transition-colors duration-300 font-bold font-serif text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <FaReact className="text-blue-500 mr-3 text-xl" /> React & JavaScript
              </motion.li>
              <motion.li 
                className="flex items-center p-3 bg-purple-50 rounded-lg shadow-sm hover:bg-purple-100 transition-colors duration-300 font-bold font-serif text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <FaDatabase className="text-green-500 mr-3 text-xl" /> Database
              </motion.li>
              <motion.li 
                className="flex items-center p-3 bg-purple-50 rounded-lg shadow-sm hover:bg-purple-100 transition-colors duration-300 font-bold font-serif text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <FaJava className="text-red-500 mr-3 text-xl" /> Java
              </motion.li>
              <motion.li 
                className="flex items-center p-3 bg-purple-50 rounded-lg shadow-sm hover:bg-purple-100 transition-colors duration-300 font-bold font-serif text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <FaPython className="text-yellow-500 mr-3 text-xl" /> Python
              </motion.li>
            </ul>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 italic font-bold font-serif">"Code is poetry in motion."</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default About;
