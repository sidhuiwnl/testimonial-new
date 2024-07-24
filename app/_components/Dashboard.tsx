import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/testimonial"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded transition duration-150 ease-in-out"
              >
                Import Testimonial
              </Link>
            </li>
            <li>
              <Link
                href="/Tweets"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded transition duration-150 ease-in-out"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/third"
                className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded transition duration-150 ease-in-out"
              >
                Review
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}