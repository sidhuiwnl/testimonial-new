import { Tweet } from "react-tweet";
import { getData, deleteTweet } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";

export async function TweetGrid() {
    async function handleDelete(formData: FormData) {
        'use server'
        const id = formData.get('id') as string;
        const result = await deleteTweet({ id });
        if (result.success) {
            revalidatePath('/Tweets')
            console.log("successfully deleted")
        } else {
            console.error(result.msg);
        }
    }

    try {
        const result = await getData();
        const tweets = result.data;

        if (!tweets || tweets.length === 0) {
            return <p>No tweets found.</p>;
        } else if (result) {
            revalidatePath('/Tweets')
        }

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tweets.map((tweet) => (
                    <div key={tweet.id}>
                       
                            <Tweet id={tweet.tweetUrl} />
                        
                        <form action={handleDelete} className="mt-4">
                            <input type="hidden" name="id" value={tweet.id} />
                            <Button type="submit" className="w-full">Delete</Button>
                        </form>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error('Error fetching tweets:', error);
        return <p>Error loading tweets. Please try again later.</p>;
    }
}