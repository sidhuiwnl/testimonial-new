import { Tweet } from "react-tweet";
import { getData } from "@/lib/db";
import { Suspense } from 'react';

async function TweetGrid() {
    try {
        const result = await getData();
        const tweets = result.data;

        if (!tweets || tweets.length === 0) {
            return <p>No tweets found.</p>;
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tweets.map((tweet) => (
                    <div key={tweet.id} className="border rounded-lg p-4 shadow-sm">
                        <Tweet id={tweet.tweetUrl} />
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error('Error fetching tweets:', error);
        return <p>Error loading tweets. Please try again later.</p>;
    }
}

export default function Tweets() {
    return (
        <div className="flex flex-col h-full">
            <h1 className="text-2xl font-bold p-4">Tweets</h1>
            <div className="flex-grow overflow-y-auto p-4">
                <Suspense fallback={<p>Loading tweets...</p>}>
                    <TweetGrid />
                </Suspense>
            </div>
        </div>
    );
}