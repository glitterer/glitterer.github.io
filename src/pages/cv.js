import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function CV() {
  return (
    <div className="h-screen w-full text-black flex flex-col items-center justify-start">
      {/* Title and Download Button */}
      <div className="w-full max-w-6xl flex items-center justify-between p-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold"
        >
          Curriculum Vitae
        </motion.h1>

        {/* Download CV Button */}
        <motion.a
          href="/SeikOh_CV.pdf"
          download="SeikOh_CV.pdf"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          <FaDownload className="text-xl" />
          Download
        </motion.a>
      </div>

      {/* Fullscreen CV Preview */}
      <div className="w-full h-full flex-grow px-10 pb-10">
        <iframe
          src="/SeikOh_CV.pdf"
          className="w-full h-full border rounded-lg shadow-lg"
          title="Seik Oh's CV"
        />
      </div>
    </div>
  );
}
