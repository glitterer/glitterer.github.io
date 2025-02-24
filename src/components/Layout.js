import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Top Navigation Bar (Full Width) */}
      <nav className="w-full p-2 bg-white border-b border-gray-300 fixed top-0 left-0 flex justify-center space-x-12 shadow-md z-50">
      {[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/research", label: "Research" },
        { href: "/projects", label: "Projects" },
        { href: "/teaching", label: "Teaching" },
        { href: "/cv", label: "CV" },
        ].map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            className="relative text-black font-medium px-4 py-2 transition-all duration-300 ease-in-out 
                      hover:text-white hover:scale-110 
                      before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-[4px] before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 
                      before:transition-all before:duration-500 hover:before:w-full 
                      hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-300/50 rounded-md text-lg"
          >
            {item.label}
          </Link>
        ))}
      </nav>


      {/* Left Profile Section (Fixed Sidebar) */}
      <aside className="w-[18%] min-h-screen p-6 flex flex-col items-center bg-gray-100 border-r border-gray-300 fixed top-14 left-0">
        <div className="w-full max-w-[240px] aspect-square relative rounded-full overflow-hidden shadow-lg mb-4">
          <Image 
            src="/profile.JPG" 
            alt="Seik Oh"
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-center">Seik Oh</h1>
        <p className="text-base text-gray-600 text-center mt-2">CS Master Student | Brown University</p>
        {/* Available text sizes in Tailwind:
          text-xs    (12px)
          text-sm    (14px)
          text-base  (16px)
          text-lg    (18px)
          text-xl    (20px)
          text-2xl   (24px)
          text-3xl   (30px)
          text-4xl   (36px)
          text-5xl   (48px)
          text-6xl   (60px)
          text-7xl   (72px)
          text-8xl   (96px)
          text-9xl   (128px)
        */}

        {/* Social Links */}
        <div className="mt-4 space-y-2 text-center">
          <p className="flex items-center gap-2 text-gray-600 mb-5">📍 Providence, RI</p>
          <Link href="mailto:seik_oh@brown.edu" className="block hover:text-blue-500 flex items-center gap-2">📧 Email</Link>
          {/* <Link href="https://scholar.google.com" className="block hover:text-blue-500 flex items-center gap-2">🎓 Google Scholar</Link> */}
          <Link href="https://github.com/glitterer" className="block hover:text-blue-500 flex items-center gap-2">
            <Image src="/github_logo.jpg" alt="GitHub" width={20} height={20} className="object-contain" /> GitHub
          </Link>
          <Link href="https://linkedin.com/in/seikoh" className="block hover:text-blue-500 flex items-center gap-2">
            <Image src="/LinkedIn_icon.png" alt="LinkedIn" width={20} height={20} className="object-contain" /> LinkedIn
          </Link>
          <Link href="https://gettingtoknowit.tistory.com" className="block hover:text-blue-500 flex items-center gap-2">
            <Image src="/tistory.png" alt="Tistory" width={20} height={20} className="object-contain" /> Blog (Korean)
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-h-screen bg-white text-black ml-[18%] pt-6 px-8">
        <main className="flex-1 p-10 bg-white w-full">{children}</main>
      </div>
      
      {/* Footer Section */}
      <footer className="w-full bg-gray-200 text-gray-400 text-left text-sm py-2 mt-auto border-t border-gray-300 fixed bottom-0 left-0 pl-32">
        © 2024 Seik Oh
      </footer>
    </div>
  );
}
