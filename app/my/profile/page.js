import Link from "next/link";
import { redirect } from "next/navigation";
import { auth,signOut } from "@/auth";
import { Button } from "@mui/material";

export default async function Profile() {
    const session = await auth ();

    // <<<< USER AUTH CHECK >>>>
    if (!session?.user) {
        redirect("/auth/signin")
    }
    // USER AUTH CHECK >>>>
    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 my-6 md:my-8 lg:my-16">
         <article className="flex justify-center">
           <div className="max-w-[290px] md:min-w-[290px]flex flex-col gap-2 border border-gray-300 rounded-md p-3">
             <blockquote className="border-b border-gray-300 pb-2">
                <span className="text-md text-gray-700">{session?.user?.name}</span>
             </blockquote>
             <blockquote className="border-b border-gray-300 pb-2">
              <span className="text-md text-gray-700">{session?.user?.email}</span>
             </blockquote>
             <form action={async () => {
                "use server"
                await signOut ({
                  redirect:true,
                  redirectTo:"/auth/signin"
                })
                
             }}>
              <Button type="submit" variant="contained" color="warning">Log Out</Button>
             </form>

             </div>
         </article>
          <aside>
            {/*show previous products posts by user here*/}
          </aside>
        </main>
    )
}