import React from "react";
import { Card, CardContent } from "./ui/card";
import { FaCode, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex items-center justify-center p-6 relative overflow-hidden min-h-screen bg-transparent">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Card className="max-w-2xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-blue-300 rounded-3xl bg-white/80">
          <CardContent className="p-8">
            <motion.div
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="sanji.png"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-300 shadow-lg"
              />
            </motion.div>

            <motion.h1
              className="text-4xl font-bold font-serif mb-4 text-purple-700 flex items-center justify-center gap-2"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaCode className="text-blue-500" /> Welcome to My Portfolio
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-6 font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hi, I'm <span className="font-bold text-purple-600">Sean James Galindo BSCS 3-2</span>! Passionate about web development and anime. Explore my work and let's build something amazing together.
            </motion.p>

            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-sm text-gray-500 italic font-serif flex items-center justify-center gap-1">
                <FaHeart className="text-red-500" /> "Coding with creativity and a dash of anime magic."
              </p>
            </motion.div>

          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Home;
