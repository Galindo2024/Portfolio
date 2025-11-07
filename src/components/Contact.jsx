import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex items-center justify-center p-6 relative overflow-hidden min-h-screen bg-transparent">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Card className="max-w-2xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-pink-300 rounded-3xl bg-white/80">
          <CardHeader className="text-center pb-8 pt-10">
            <CardTitle className="text-3xl font-bold font-serif text-purple-700 mb-4">
              Get In Touch
            </CardTitle>
            <p className="text-lg text-gray-600 mt-2 font-serif">
              Feel free to reach out via my social platforms!
            </p>
          </CardHeader>
          <CardContent className="text-center px-8 pb-10">
            {/* Social Links Container */}
            <div className="flex justify-center gap-6 flex-wrap">
              {/* GitHub Link */}
              <motion.a
                href="https://github.com/galindo2024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-4 border-purple-500 text-purple-600 hover:bg-purple-100 hover:border-purple-700 hover:text-purple-800 hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-purple-300 hover:font-bold transition-all duration-300 rounded-full px-8 py-4 shadow-lg font-bold font-mono"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub /> GitHub
              </motion.a>

              {/* Facebook Link */}
              <motion.a
                href="https://www.facebook.com/share/1K6gS2yWVA/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-4 border-purple-500 text-purple-600 hover:bg-purple-100 hover:border-purple-700 hover:text-purple-800 hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-purple-300 hover:font-bold transition-all duration-300 rounded-full px-8 py-4 shadow-lg font-bold font-mono"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <FaFacebook /> Facebook
              </motion.a>

              {/* Instagram Link */}
              <motion.a
                href="https://www.instagram.com/its.me_shinei/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-4 border-purple-500 text-purple-600 hover:bg-purple-100 hover:border-purple-700 hover:text-purple-800 hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-purple-300 hover:font-bold transition-all duration-300 rounded-full px-8 py-4 shadow-lg font-bold font-mono"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <FaInstagram /> Instagram
              </motion.a>
            </div>

            <div className="mt-8 text-sm text-gray-500 italic font-serif">
              <p>Let's build something amazing together!</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Contact;
