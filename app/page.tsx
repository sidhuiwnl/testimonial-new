import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default async function Page() {
	const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
	}
	return (
		<main className="bg-gradient-to-br from-gray-900 to-black">
			<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="text-white text-2xl md:text-6xl font-bold text-center p-6">Add your Loved Tweets and Show the Collection</h1>
			<Button variant="secondary">Import Tweets</Button>
		</div>
		</main>
	)
}