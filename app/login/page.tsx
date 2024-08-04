import { FaGithub } from "react-icons/fa";
import { AuroraBackground } from "@/components/ui/aurora-background";
export default async function LoginPage() {
 
  return (
    <AuroraBackground>
    <main className=" w-screen bg-gradient-to-br from-gray-900 to-black min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-lg w-full space-y-8 text-center">
        <h1 className="text-white text-2xl md:text-6xl font-bold">
          Tweet Collection
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl mt-4">
          Add your Loved Tweets and Show the Collection
        </p>
        <div className="mt-8">
          <a
            href="/login/github"
            className=" z-10 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-150 ease-in-out"
          >
            <FaGithub className=" z-10 w-6 h-6 mr-2" />
            
          </a>
        </div>
      </div>
    </main>
    </AuroraBackground>
  );
}