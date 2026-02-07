import { SocialLinks } from "@/components/SocialLinks";
import { ProfileHeader } from "@/components/ProfileHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-green-100/30 relative overflow-hidden flex items-center justify-center">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-100/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-lime-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto min-h-screen py-10 sm:py-12 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="w-full">
              <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 shadow-xl shadow-emerald-500/10 border border-white/60">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-emerald-50/40 rounded-3xl"></div>
                <div className="relative z-10 aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source
                      src="https://res.cloudinary.com/dba6fhkda/video/upload/v1770490819/Arbab_mustafa_intro_1_1_arxstg.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <ProfileHeader />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
