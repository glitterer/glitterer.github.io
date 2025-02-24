import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-full bg-white text-black flex flex-col items-left p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-10 text-left"
      >
        About Me
      </motion.h1>

      <div className="max-w-4xl w-full">
        {/* Profile & Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6 bg-white shadow-md rounded-xl p-6 border border-gray-200"
        >
          <Image 
            src="/profile.JPG" 
            alt="Seik Oh"
            width={120} 
            height={120} 
            className="rounded-full shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Seik Oh</h2>
            <p className="text-lg text-gray-600">
              Master's Student in Computer Science at Brown University
            </p>
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 p-8 bg-white shadow-md rounded-xl border border-gray-200"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            My research interests focus on <strong>human-computer interaction(HCI), accessibility, and education</strong> for developing assistive and educational technologies for diverse user groups. <br/><br/>
            I am particularly passionate about <strong>interaction design and human-centered AI</strong> for accessibility, learning experiences, and social inclusivity in various contexts.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
