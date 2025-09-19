import { SocialLinks } from "@/components/SocialLinks";
import { ProfileHeader } from "@/components/ProfileHeader";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-br from-white via-gray-50/30 to-purple-50/40 relative overflow-hidden flex items-center justify-center">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-pink-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 max-h-screen overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center h-screen space-y-6 sm:space-y-8">
          <ProfileHeader />
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}
