import { SocialLinks } from "@/components/SocialLinks";
import { ProfileHeader } from "@/components/ProfileHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader />

          <div className="mt-12">
            <SocialLinks />
          </div>

          {/* Additional info section */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed max-w-2xl mx-auto">
              Welcome to my digital space! I'm a Software Engineer and FullStack
              Developer from Islamabad, Pakistan. Currently focusing on DevOps &
              in-depth Software Engineering concepts. Check out my portfolio at{" "}
              <a
                href="https://www.arbabmustafa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                arbabmustafa.com
              </a>
              and connect with me across all platforms!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
