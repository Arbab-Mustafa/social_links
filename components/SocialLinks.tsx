interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  colorClass: string;
}

function SocialLink({ href, icon, label, colorClass }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 border border-white/60 overflow-hidden"
      aria-label={label}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon */}
      <div
        className={`${colorClass} text-lg sm:text-xl md:text-2xl transition-all duration-300 group-hover:scale-125 relative z-10 drop-shadow-sm`}
      >
        {icon}
      </div>

      {/* Enhanced tooltip */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap shadow-xl backdrop-blur-sm">
          {label}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500"></div>
        </div>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
    </a>
  );
}

export function SocialLinks() {
  const socialLinks = [
    {
      href: "https://www.youtube.com/@arbabmustafa1",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      label: "YouTube",
      colorClass: "text-red-600",
    },
    {
      href: "https://www.instagram.com/dev_arbab?igsh=MXR3eTRrMmtrYmwyaw==",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      label: "Instagram",
      colorClass: "text-pink-600",
    },
    {
      href: "https://www.facebook.com/arbab.mustafa.2025/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: "Facebook",
      colorClass: "text-blue-600",
    },
    {
      href: "https://www.tiktok.com/@arbab_mustafa1",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      label: "TikTok",
      colorClass: "text-black",
    },
    {
      href: "https://x.com/KMarkhoor",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "Twitter / X",
      colorClass: "text-black",
    },
    {
      href: "https://www.linkedin.com/in/arbabmustafa/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      colorClass: "text-blue-700",
    },
    {
      href: "https://www.arbabmustafa.com/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
      ),
      label: "Portfolio",
      colorClass: "text-purple-600",
    },
    {
      href: "https://github.com/Arbab-Mustafa",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      colorClass: "text-gray-800",
    },
  ];

  return (
    <div className="relative group">
      {/* Modern glass container */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl shadow-purple-500/5 border border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-indigo-50/20 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Enhanced title */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-slate-700 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
              Connect With Me
            </h2>
            <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 justify-items-center mb-4 sm:mb-6">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                icon={link.icon}
                label={link.label}
                colorClass={link.colorClass}
              />
            ))}
          </div>

          {/* Enhanced call to action */}
          <div className="text-center">
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium px-4">
              Click on any platform to follow me and
              <span className="text-purple-500 font-semibold">
                {" "}
                stay updated!
              </span>
            </p>
          </div>
        </div>

        {/* Subtle floating elements */}
        <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
