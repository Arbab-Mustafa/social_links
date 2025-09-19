export function ProfileHeader() {
  return (
    <div className="text-center relative group">
      {/* Modern glass card */}
      <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl shadow-purple-500/5 border border-white/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/80">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-50/30 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Name with modern gradient */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-slate-700 via-purple-600 to-indigo-500 bg-clip-text text-transparent tracking-tight leading-tight">
            Arbab Mustafa
          </h1>

          {/* Title with accent */}
          <div className="mb-4 sm:mb-6">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-purple-600 mb-2">
              Software Engineer & FullStack Developer
            </p>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Subtle floating elements */}
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
