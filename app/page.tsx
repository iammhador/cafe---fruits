import Head from "next/head";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cafe & Fruits | Coffee & Fresh Juices</title>
        <meta
          name="description"
          content="Exceptional Coffee & Fresh Juices in the Heart of Paris"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5 animate-pulse">
            <div className="absolute transform rotate-45 -inset-4 bg-gradient-to-r from-slate-800 to-slate-700 blur-3xl" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Logo Section */}
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-3 transform transition-transform duration-300 group-hover:scale-105">
                <span className="text-amber-400 text-3xl font-bold tracking-wider">
                  Cafe
                </span>
                <span className="text-slate-400 text-3xl">&</span>
                <span className="text-emerald-400 text-3xl font-bold tracking-wider">
                  Fruits
                </span>
              </div>
            </div>

            {/* Creator Section */}
            <div className="flex flex-col items-center space-y-6">
              <div className="flex flex-col sm:flex-row items-center text-lg space-y-2 sm:space-y-0">
                <span className="text-slate-400">Designed & Developed by</span>
                <a
                  href="https://iammhador.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:ml-2 group relative px-4 py-1 font-medium transition-all duration-300"
                >
                  <span className="absolute inset-0 w-full h-full transform translate-x-1 translate-y-1 bg-slate-800 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
                  <span className="absolute inset-0 w-full h-full bg-slate-700 border-2 border-slate-600 group-hover:bg-emerald-500" />
                  <span className="relative text-slate-100 group-hover:text-white">
                    Mehedy Hasan Ador
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/iammhador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-amber-400">
                    <RiGithubFill
                      size={22}
                      className="text-slate-400 group-hover:text-amber-400"
                    />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/iammhador/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-emerald-400">
                    <RiLinkedinBoxFill
                      size={22}
                      className="text-slate-400 group-hover:text-emerald-400"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="relative w-32 h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
            </div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Cafe & Fruits. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs">
                Crafted with precision in Bangladesh
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
