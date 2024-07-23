import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div className="w-64 bg-slate-100 p-4 h-screen">
        <div className="mb-6 p-4">
          <h2 className="text-lg  mb-2">Contact</h2>
          <ul className="space-y-2">
            <Link
              href={"/testimonial"}
              className="hover:bg-gray-200 p-2 rounded font-bold"
            >
              Import Testimonial
            </Link>
            <li className="hover:bg-gray-200 p-2 rounded font-bold">
              Invite to review
            </li>
          </ul>
          <hr></hr>
        </div>
        <div className="p-4">
          <h2 className="text-lg  mb-2">Manage</h2>
          <ul className="space-y-2">
            <li className="hover:bg-gray-200 p-2 rounded font-bold">
              Testimonials
            </li>
          </ul>
          <hr></hr>
        </div>
      </div>
    </>
  );
}
