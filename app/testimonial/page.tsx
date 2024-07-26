"use client";

import { useCallback, useMemo, useState } from "react";
import { Tweet } from "react-tweet";
import { toast } from "sonner";
import { components } from "@/app/_components/TwitterComponents";

export default function Testimonial() {
  const [tweetInput, setTweetInput] = useState("");

  const extractTweet = useCallback((tweetUrl: string): string => {
    const tweetRgx =
      /(?:https?:\/\/)?(?:www\.)?(?:twitter\.com|x\.com)\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)/;
    const match = tweetUrl.match(tweetRgx);

    if (match) {
      return match[2];
    } else if (/^\d+$/.test(tweetUrl)) {
      return tweetUrl;
    }

    return "Not found";
  }, []);

  const tweetUrl = useMemo(() => extractTweet(tweetInput), [tweetInput]);

  async function tweetToDatabase(){

    if(!tweetInput){
      toast.error("Please add a URL or ID to save the tweet");
      return false;
    }else{
      try {
        const response =  await fetch('/api/tweet',{
          method : "POST",
          headers : {
            "Content-type" : 'application/json'
          },
          body : JSON.stringify({tweetUrl})
         })
      
         if(!response.ok){
          const errorData = await response.json().catch(() => ({}))
          toast.warning(errorData)
         }else{
          toast("Successful saving Tweet ")
          setTweetInput("");
         }
      } catch (error) {
        console.error('Error saving tweet to database:', error);
        toast.error(error instanceof Error ? error.message : 'Failed to save tweet');
        return false;
      }
    }
    
  }

  

  return (
    <div className="p-5">
      <div className="mb-4">
        <label
          htmlFor="source"
          className="block text-sm font-bold text-gray-700 mb-2"
        >
          Import Source
        </label>
        <input
          id="source"
          type="text"
          placeholder="Place the Tweet URL or ID"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => setTweetInput(e.target.value)}
          value={tweetInput}
        />
      </div>
      <div>
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={tweetToDatabase} 
        >
          Import
        </button>
      </div>
      {tweetInput && (
        <div className="mt-4">
          <Tweet id={tweetUrl} components={components} />
        </div>
      )}
    </div>
  );
}
