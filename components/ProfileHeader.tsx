export function ProfileHeader() {
  return (
    <div className="text-center">
      {/* Profile Picture */}

      {/* Name and Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Arbab Mustafa
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
        Software Engineer & FullStack Developer
      </p>

      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Commitment, Solving Client's real-world problems, Meet Deadlines.
        Passionate about Full Stack Development and always ready to learn new
        technologies!
      </p>

      {/* Stats */}
      <div className="flex justify-center space-x-8 mt-8">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            28
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Followers
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            68
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Repositories
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            68
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Stars</div>
        </div>
      </div>
    </div>
  );
}
