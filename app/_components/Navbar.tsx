import { lucia,validateRequest } from "@/lib/auth"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { ModeToggle } from "@/components/mode-toggle"




import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar({username } : {username :string}) {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 sm:px-6 border-b">
      <div className="flex items-center gap-4">
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
          Testimonial
        </Link>
      </div>
      <div className="font-medium">Hi,{username}</div>
      <div className="flex items-center gap-4">
        <form action={logout}>
			    <Button>Sign out</Button>
		</form>
		<ModeToggle/>
      </div>
    </header>
  )
}




async function logout(): Promise<ActionResult> {
	"use server";
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/login");
}

interface ActionResult {
	error: string | null;
}