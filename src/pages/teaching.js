import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaBookOpen, FaSchool } from "react-icons/fa";

export default function Teaching() {
  return (
    <div className="h-full text-black flex flex-col items-left p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-8"
      >
        Teaching Experience
      </motion.h1>

      <div className="max-w-6xl space-y-8">
        {/* Voluntary Service in Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
        >
          <div className="flex items-center gap-4">
            <FaBookOpen className="text-blue-500 text-3xl" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Voluntary Service in Education, Tutor</h2>
              <p className="text-gray-600 text-md">Seoul, South Korea</p>
            </div>
            <span className="text-gray-500 text-sm ml-auto">Mar. 2017 – May 2017; July 2020</span>
          </div>
          <div className="mt-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg leading-relaxed text-gray-700">
                Facilitated educational activities at childcare centers and tutored core subjects to enhance students' academic performance.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Student Teaching at Chungju Joongsan High School */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
        >
          <div className="flex items-center gap-4">
            <FaChalkboardTeacher className="text-green-500 text-3xl" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Middle School Teaching, Student Teacher</h2>
              <p className="text-gray-600 text-md">Chungju Joongsan High School, South Korea</p>
            </div>
            <span className="text-gray-500 text-sm ml-auto">May 2020</span>
          </div>
          <div className="mt-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg leading-relaxed text-gray-700">
                Developed assessment rubrics and led interactive Zoom-based lessons, enhancing student engagement and learning outcomes.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Summer Student Talent Volunteer Camp */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
        >
          <div className="flex items-center gap-4">
            <FaSchool className="text-purple-500 text-3xl" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Summer Student Talent Volunteer Camp, Tutor</h2>
              <p className="text-gray-600 text-md">Gangwondo, South Korea</p>
            </div>
            <span className="text-gray-500 text-sm ml-auto">July 2019</span>
          </div>
          <div className="mt-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg leading-relaxed text-gray-700">
                Hosted by Korea Scholarship Foundation, developed and taught comprehensive curricula, creating all teaching materials.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Private Tutoring */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
        >
          <div className="flex items-center gap-4">
            <FaChalkboardTeacher className="text-red-500 text-3xl" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Private Tutoring, Tutor</h2>
              <p className="text-gray-600 text-md">Seoul, South Korea</p>
            </div>
            <span className="text-gray-500 text-sm ml-auto">July 2015 – June 2017</span>
          </div>
          <div className="mt-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg leading-relaxed text-gray-700">
                Designed and delivered customized curricula for university and secondary students, enhancing academic performance.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
