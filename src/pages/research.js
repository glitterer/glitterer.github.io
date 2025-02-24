import { motion } from "framer-motion";
import { FaUniversity, FaBrain } from "react-icons/fa";

export default function Research() {
  return (
    <div className="h-full text-black flex flex-col items-left p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-8"
      >
        Research
      </motion.h1>

      <div className="max-w-6xl space-y-8">
        {/* Research Assistant Internship */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
        >
          <div className="flex items-center gap-4">
          <img src="/Brown_logo.png" alt="Ada Logo" className="w-14 h-14 object-contain"/>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Research Assistant Internship</h2>
              <p className="text-gray-600 text-md">LNCC Lab, Brown University</p>
            </div>
            <span className="text-gray-500 text-sm ml-auto">June 2024 - Dec 2024</span>
          </div>
          <p className="mt-4 text-gray-600 italic font-medium text-lg">
            Supervisors:
          </p>
          <p className="text-gray-500 text-sm">Dr. Nadja R. Ging-Jehli (Postdoctoral Researcher) and Dr. Michael J. Frank (Professor)</p>
          <div className="mt-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg leading-relaxed text-gray-700">
                Led redesign of Gearshift Fellowship research platform UI/UX using Figma, integrating computational psychiatry concepts to enhance accessibility for ADHD and other cognitive conditions, expanding online research capabilities and user engagement.
              </li>
              <li className="text-lg leading-relaxed text-gray-700">
                Strategically optimized data integrity for the research platform by meticulously refining user instructions and implementing robust quality control protocols, substantially enhancing research validity and overall participant experience.
              </li>
              <li className="text-lg leading-relaxed text-gray-700">
                Lead in data collection and analysis, enhancing research quality for Diffusion Decision Model analysis; program management and interdisciplinary collaboration between diverse domains to accelerate the research platform development.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
