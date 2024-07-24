
import { Tweet } from "react-tweet";
import getData from "@/lib/db";

export default async function Tweets() {
    
    const result = await getData();
    
    const tweets = result.data
    return (
        <>
           {tweets?.map((tweet) =>(
            <div key={tweet.id}>
                <Tweet id={tweet.tweetUrl}/>
            </div>
           ))}
        </>
    );
}