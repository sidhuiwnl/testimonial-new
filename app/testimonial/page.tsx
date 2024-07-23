'use client'

import { useCallback, useMemo, useState } from "react"
import { Tweet } from "react-tweet"

export default function Testimonial() {
    const [tweetInput, setTweetInput] = useState("");
    

    const extractTweet = useCallback((tweetUrl : string) : string  =>{
        const tweetRgx = /(?:https?:\/\/)?(?:www\.)?(?:twitter\.com|x\.com)\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)/;
        const match = tweetUrl.match(tweetRgx);

        if (match) {
            
            return match[2];
          } else if (/^\d+$/.test(tweetUrl)) {
            
            return tweetUrl;
          }
          
          return "Not found";
    },[]);
  
    const tweetUrl = useMemo(() =>  extractTweet(tweetInput),[tweetInput]);

    return (
        <div className="p-5">
            <div className="mb-4">
                <label htmlFor="source" className="block text-sm font-bold text-gray-700 mb-2">
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
                <button 
                    
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Import
                </button>
            </div>
            { tweetInput && (
                <div className="mt-4">
                    <Tweet id={tweetUrl} />
                </div>
            )}
        </div>
    )
}