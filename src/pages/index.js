import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen bg-white text-black flex flex-col items-center justify-center">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold tracking-wide"
        >
          {[..."👾 Hi, my name is Seik 👋"].map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg max-w-xl"
        >
          I'm interested in driving innovation while establishing vital connections and interactions
          between humans and computing capabilities through technology, design, and education.
        </motion.p>

        <motion.img
          src="/profile.jpg"
          alt="Profile Picture"
          className="mt-6 w-48 h-48 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </main>
    </div>
  );
}



// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Home() {
//   const [darkMode, setDarkMode] = useState(false); // Default to light mode


//   return (
//     <div className="h-full bg-white text-black flex flex-col items-center justify-center">
//       {/* Hero Section */}
//       <main className="flex flex-col items-center justify-center text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl font-extrabold tracking-wide"
//         >
//          {[..."👾 Hi, my name is Seik 👋"].map((char, index) => (
//            <motion.span
//              key={index}
//              initial={{ opacity: 0 }}
//              animate={{ opacity: 1 }}
//              transition={{ delay: index * 0.1 }}
//            >
//              {char}
//            </motion.span>
//          ))}
//         </motion.h2>
        
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-4 text-lg max-w-xl"
//         >
//           I'm interested in driving innovation while establishing vital connections and interactions between humans and computing capabilities through technology, design, and education.
//         </motion.p>
//       </main>
//     </div>
//   );
// }
