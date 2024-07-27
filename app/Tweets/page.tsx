import { TweetGrid } from '../_components/TweetGrid';
import { Suspense } from 'react';


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