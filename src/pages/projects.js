import { motion } from "framer-motion";
import { FaRocket, FaApple, FaMicrochip } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="h-full text-black flex flex-col items-left p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-8"
      >
        Projects
      </motion.h1>

      <div className="max-w-6xl space-y-8">
        {/* NASA SUITS Project */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
        >
          <div className="flex items-center gap-4">
          <img src="/NASASUITS-logo.png" alt="Ada Logo" className="w-14 h-14 object-contain"/>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">NASA SUITS(Spacesuit UI Tech for Students)</h2>
              <p className="text-gray-600 text-md">RISD x Brown University</p>
            </div>
            <span className="text-gray-500 text-sm ml-auto">Dec. 2023 - Present</span>
          </div>
          <p className="mt-4 text-lg text-gray-700 italic font-medium">
            Mission-Specific Lunar and Mars Software & Design Development
          </p>
          <div className="mt-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg leading-relaxed text-gray-700">
                Designing and developing software for mission-specific lunar missions integrating AI technology including voice control and computer vision techniques, collaborating with designers from RISD to enhance astronaut functionality.
              </li>
              <li className="text-lg leading-relaxed text-gray-700">
                Created semi-real interface graphics, including Energy, Navigation, and Topological Sampling, and map function for augmented reality (AR), improving spatial awareness and user experience without obstructing the field of view.
              </li>
              <li className="text-lg leading-relaxed text-gray-700">
                Ensured stable performance and resolved technical challenges during the test and test pitch at NASA Johnson Space Center.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* SpaceOver Project */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
        >
          <div className="flex items-center gap-4">
          <img src="/ada_logo.jpg" alt="Ada Logo" className="w-14 h-14 object-contain"/>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">SpaceOver</h2>
              <p className="text-gray-600 text-md">Apple Developer Academy @ POSTECH</p>
            </div>
            <span className="text-gray-500 text-sm ml-auto">Sep. 2022 – Dec. 2022</span>
          </div>
          <p className="mt-4 text-lg text-gray-700 italic font-medium">
            Accessible Astronomy Education App Development
          </p>
          <div className="mt-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg leading-relaxed text-gray-700">
                Collaborated with an interdisciplinary team and developed an app for Blind and Visually Impaired (BVI) users to independently explore celestial objects using spatial audio and haptic feedback, addressing the need of cross-visual astronomical tools.
              </li>
              <li className="text-lg leading-relaxed text-gray-700">
                Led and conducted user-centered research and iterative prototyping with the BVI astronomer, Dr. Nic Bonne, implementing innovative techniques and contributing to software development, enhancing accessibility in astronomy education.
              </li>
              <li className="text-lg leading-relaxed text-gray-700">
                Achieved top 130 ranking in App Store's Entertainment category, selected and presented as one of three representative apps for Apple Developer Academy @ POSTECH media and government showcase.
              </li>
            </ul>
          </div>
          {/* App Store Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://apps.apple.com/us/app/spaceover/id6444027977"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-40 h-auto"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
