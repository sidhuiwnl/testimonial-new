import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default async function Page() {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }
  return (
    <AuroraBackground>
      <main className=" w-screen bg-gradient-to-br from-gray-900 to-black ">
        
          <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-2xl md:text-6xl font-bold text-center p-6">
              Add your Loved Tweets and Show the Collection..
            </h1>
            <Link
              className=" z-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="/Testimonial"
            >
              Import Tweet
            </Link>
          </div>
        
      </main>
    </AuroraBackground>
  );
}
