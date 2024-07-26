import Link from "next/link";
import { FaFileImport, FaComments, FaClipboardCheck } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="w-64 bg-white max-h-screen rounded border-r-2">
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-6 hover:underline">Dashboard</h1>
        <nav>
          <ul className="space-y-6">
            <li>
              <Link
                href="/Testimonial"
                className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded transition duration-150 ease-in-out"
              >
                <FaFileImport className="mr-3" />
                Import Testimonial
              </Link>
            </li>
            <li>
              <Link
                href="/Tweets"
                className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded transition duration-150 ease-in-out"
              >
                <FaComments className="mr-3" />
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/third"
                className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded transition duration-150 ease-in-out"
              >
                <FaClipboardCheck className="mr-3" />
                Review
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}