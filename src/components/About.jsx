import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const RocketAnimation = ({ scrollYProgress }) => {
  const x = useTransform(scrollYProgress, [0, 1], [-100, window.innerWidth + 100]);
  
  return (
    <motion.div
      className="fixed pointer-events-none z-10"
      style={{ x, y: '40%' }}
    >
      <div className="text-6xl transform rotate-0 animate-pulse">🚀</div>
    </motion.div>
  );
};

const About = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <div 
      className="w-full min-h-screen bg-cover bg-center bg-fixed pt-20 overflow-hidden relative"
      style={{ backgroundImage: `url(/background.png)` }}
    >
      {/* Subtle Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <RocketAnimation scrollYProgress={scrollYProgress} />

      <div className="relative z-20 container mx-auto px-4 pb-20">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.h1 
              className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 mb-8"
            >
              RUBAROO 2025
            </motion.h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl font-light text-white max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Embark on a cosmic journey of creativity and culture at SRM's most anticipated festival.
            Three days of interstellar performances, art, and innovation await.
          </motion.p>

          <motion.div className="flex justify-center gap-6">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-bold text-white"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Pass 🎟️
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-xl font-bold text-white border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Teaser ▶️
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Festival Highlights */}
        <motion.div className="mb-32">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-16"
          >
            Festival Highlights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: "🎵",
                title: "Sonic Odyssey",
                desc: "Multi-stage music festival featuring international artists and immersive sound experiences"
              },
              {
                icon: "🎭",
                title: "Reality Warpers",
                desc: "Mind-bending performances combining theatre, technology, and interactive storytelling"
              },
              {
                icon: "💫",
                title: "Celestial Arena",
                desc: "Cutting-edge dance competitions on our reactive LED arena floor"
              },
              {
                icon: "🎨",
                title: "Digital Dreamscape",
                desc: "AI-powered art installations that evolve with audience interaction"
              },
              {
                icon: "✨",
                title: "Neon Nights",
                desc: "After-hours spectacle with choreographed drones and laser shows"
              },
              {
                icon: "🌌",
                title: "Innovation Hub",
                desc: "Tech showcases and workshops led by industry pioneers"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-full bg-black/40 backdrop-blur-xl border border-white/5 p-6 rounded-xl hover:border-pink-500/30 transition-all duration-300"
                  whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guest Performance */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-8">Featured Artists</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl text-gray-300">
              Prepare for an otherworldly lineup featuring award-winning artists,
              viral sensations, and groundbreaking performers from across the globe.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div 
                className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-3xl font-bold text-purple-400 mb-4">Main Stage</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>⭐ International Headliners</li>
                  <li>🎵 Chart-Topping Performances</li>
                  <li>🎪 Spectacular Production</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-3xl font-bold text-pink-400 mb-4">Nova Stage</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>🌟 Emerging Artists</li>
                  <li>🎤 Viral Sensations</li>
                  <li>🔥 High-Energy Sets</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;