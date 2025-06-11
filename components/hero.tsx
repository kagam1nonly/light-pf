export const Hero = () => {
  return (
    <div className="flex items-center justify-center mb-20">
          <div className="text-center">
            <div className="overflow-hidden">
              <h1 className="text-3xl font-[var(--font-heading)] typewriter">
                Hi, I&apos;m{" "}
                <span className="text-[var(--color-primary)]">James Piastro</span>
              </h1>
            </div>
            <p className="text-[var(--font-sans)] fade-in-1 mt-4">
              Full Stack Developer · Tech Enthusiast
            </p>
            <p className="fade-in-2 mt-2">Davao City, Philippines</p>
            <a 
              href="/Resume.pdf" 
              target="_blank"
              className="fade-in-2 inline-block mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Resume
            </a>
          </div>
        </div>
  );
};

export default Hero;
