import Head from "next/head";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white">
      <Head>
        <title>Tippify - Creator Dashboard</title>
      </Head>
      <header className="flex justify-between items-center p-4 bg-black bg-opacity-50">
        <div className="text-2xl font-bold">Tippify</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md text-black"
          />
          <div className="flex items-center space-x-2">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">Echoes & Rainhn </div>
          </div>
        </div>
      </header>
      <main className="p-8">
        <h1 className="text-3xl mb-6">Welcome back, Echoes & Rainhn !</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-xl mb-4">Profile Overview</h2>
            <div className="flex items-center mb-4">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <div className="text-lg font-bold">Echoes & Rain </div>
                <div className="text-sm">Content Creator</div>
              </div>
            </div>
            <div className="text-sm">Total Tips: $1000</div>
            <div className="text-sm">Supporters: 500</div>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-xl mb-4">Earnings</h2>
            <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
              <img
                src="/earning.png"
                alt="Profile"
                className="w-full h-full  mr-4"
              />
            </div>
            <ul className="mt-4 space-y-2">
              <li className="text-sm">Tip from A.C. Verdigris : $10</li>
              <li className="text-sm">Tip from Z. Spark pen_spark : $5</li>
              <li className="text-sm">Tip from Charlie: $20</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-xl mb-4">Content Management</h2>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-sm">Post Title 1</span>
                <div className="flex space-x-2">
                  <button className="text-blue-400">Edit</button>
                  <button className="text-red-400">Delete</button>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Post Title 2</span>
                <div className="flex space-x-2">
                  <button className="text-blue-400">Edit</button>
                  <button className="text-red-400">Delete</button>
                </div>
              </li>
            </ul>
            <button className="mt-4 p-2 bg-blue-600 rounded-md">
              Add New Content
            </button>
          </div>
        </div>
      </main>
      <footer className="p-4 bg-black bg-opacity-50">
        <div className="flex justify-between">
          <a href="#" className="text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-sm">
            Help Center
          </a>
          <a href="#" className="text-sm">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}
