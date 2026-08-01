"use client";

export function DownloadResume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Arbab_FullStack_AI_Remote_Global.pdf";
    link.download = "/Arbab_FullStack_AI_Remote_Global.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="group relative w-full max-w-xs mx-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/40 shadow-lg shadow-emerald-500/20 border border-emerald-400/30 overflow-hidden active:scale-95"
      aria-label="Download Resume"
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>

      {/* Background shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-emerald-50/10 transition-opacity duration-300"></div>

      {/* Icon */}
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>

      {/* Text */}
      <span className="relative z-10 font-semibold">Download Resume</span>
    </button>
  );
}
