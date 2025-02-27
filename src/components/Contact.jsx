import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
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

      <div className="relative z-20 container mx-auto px-4 pb-20">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 mb-12">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors h-32"
                      placeholder="Your message..."
                    />
                  </div>
                  <motion.button
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Connect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-purple-400">Email</h3>
                    <p className="text-gray-300">rubaroo2025@srm.edu.in</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-purple-400">Phone</h3>
                    <p className="text-gray-300">+91 944 444 4444</p>
                  </div>
                  <div>
                    <h3 className="text-xl text-purple-400">Address</h3>
                    <p className="text-gray-300">
                      SRM Institute of Science and Technology<br />
                      Kattankulathur, Chennai
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Instagram", icon: "📸" },
                    { name: "Twitter", icon: "🐦" },
                    { name: "Facebook", icon: "👥" },
                    { name: "LinkedIn", icon: "💼" }
                  ].map((social, index) => (
                    <motion.button
                      key={index}
                      className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{social.icon}</span>
                      <span>{social.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;