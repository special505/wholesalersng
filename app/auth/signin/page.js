import Link from "next/link";
import { redirect } from "next/navigation";
import { TextField, Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc"
import { BsTwitterX } from "react-icons/bs"
import { auth,signIn,signOut } from "@/auth";

export default async function Signin() {
    const session = await auth();

     // <<<< USER AUTH CHECK >>>>
     if (session?.user) {
        redirect("/my")
    }
    // USER AUTH CHECK >>>>

    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 my-6 md:my-8 lg:my-16">
            <div className="h-[220px] lg:h-[400px] signin-bg-img"></div>

            <article className="flex flex-col items-center px-4 md:px-8 lg:px-16">
                <div className="min-h-[68px] w-full md:w-[289px] flex flex-col justify-center gap-1 border-x border-t border-gray-300 rounded-t-md px-4 py-4">
                    <p className="text-xl text-teal-800">Sign In</p>
                    <p className="text-xs text-gray-600">Access your account as an existing user or create an account instantly as a new user </p>
                </div>
                <div className="w-full md:w-[289px] flex flex-col gap-2 rounded-b-md bg-gray-300 px-4 py-4">
                    <form>
                        <div className="mb-2">
                            <TextField
                            id="email"
                            label="email"
                            variant="outlined"
                            className="w-full"
                            />
                        </div>
                       <Button type="submit" variant="contained" className="w-full">Continue</Button>
                    </form>
                    <div className="separator"> <span className="text-gray-400">OR</span> </div>

                    <div className="flex flex-col gap-1">
                        {/* {DELETE THIS LATER} */}
                        { session ?
                        <div className="my-4">
                            <p>You are signed in as {session?.user.email}.</p>
                        <form action={async () =>{
                            "use server"
                            await signOut({
                                redirect: true,
                                redirectTo: "/my"
                            })
                        }}>
                            <button type="submit">Sign out</button>
                        </form>
                        </div>
                        : null }
                        {/* {DELETE THIS LATER} */}

                        <form action={async () => {
                            "use server"
                            await signIn("google")
                        }}>
                            <button type="submit" className="w-full flex justify-center items-center gap-3 rounded-md bg-white hover:bg-yellow-300 p-3">
                                <FcGoogle className="text-xl"/>
                                <span className="text-gray-700">Google</span>
                            </button>
                        </form>
                        <form>
                            <button className="w-full flex justify-center items-center gap-3 rounded-md bg-white hover:bg-sky-300 p-3">
                                <BsTwitterX className="text-xl"/>
                                <span className="text-gray-700">Twitter</span>
                            </button>
                        </form>
                    </div>

                    <p className="text-xs text-gray-500">By signing in you confirm to have read and agree with our <Link href="#" className="text-gray-100">Terms of Use</Link> and <Link href="#" className="text-gray-100">Pivacy Policy</Link></p>
                </div>
            </article>
        </main>
    )
}