import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";


export default async function My() {
    const session = await auth ();

    // <<<< USER AUTH CHECK >>>>
    if (!session.user) {
        redirect("/auth/signin")
    }
    // USER AUTH CHECK >>>>
    return (
        <main className=" lg:gap-0 my-6 md:my-8 lg:my-16">
            <p>Welcome to your dashboard</p>
        </main>
    )
}