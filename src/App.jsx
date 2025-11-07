import React, { useState } from "react";
import { Button } from "./components/ui/button";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const App = () => {
  const Leaf = ({ delay }) => (
    <motion.div
      className="absolute text-yellow-600 select-none"
      initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
      animate={{
        y: [null, window.innerHeight + 50],
        x: [null, Math.random() * window.innerWidth],
        opacity: [0, 1, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      🍂
    </motion.div>
  );

  const [activeSection, setActiveSection] = useState("home");

  const sections = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />,
  };

  const sectionIcons = {
    home: <FaHome />,
    about: <FaUser />,
    projects: <FaProjectDiagram />,
    contact: <FaEnvelope />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 text-gray-900 border-4 border-pink-300 rounded-lg shadow-lg overflow-hidden relative">
      {Array.from({ length: 25 }).map((_, i) => (
        <Leaf key={i} delay={i * 0.5} />
      ))}
      
      <motion.nav
        className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-4 shadow-xl border-b-4 border-pink-600 relative z-10 backdrop-blur-sm bg-opacity-90"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <motion.h1
            className="text-2xl font-bold font-serif tracking-wide"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Web Portfolio
          </motion.h1>
          
          <div className="flex gap-4 flex-wrap">
            {Object.keys(sections).map((section) => (
              <motion.div
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant={activeSection === section ? "default" : "outline"}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize border-2 border-white rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2 ${
                    activeSection === section
                      ? "bg-white text-pink-600 shadow-lg"
                      : "hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {sectionIcons[section]} {section}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>
      
      <main className="container mx-auto p-6 border-2 border-pink-200 rounded-lg bg-transparent shadow-inner relative z-10">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {sections[activeSection]}
        </motion.div>
      </main>
    </div>
  );
};

export default App;
