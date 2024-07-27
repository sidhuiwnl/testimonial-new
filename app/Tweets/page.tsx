import { TweetGrid } from '../_components/TweetGrid';
import { Suspense } from 'react';


export default function Tweets() {
    return (
        <div className="flex flex-col h-full">
            
            <div className="flex-grow overflow-y-auto p-4">
                <Suspense fallback={<p>Loading tweets...</p>}>
                    <TweetGrid />
                </Suspense>
            </div>
        </div>
    );
}