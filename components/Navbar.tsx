import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth,signOut,signIn} from "@/auth";


const Navbar = async () => {
    const session = await auth();
    return (
        <div className={"px-5 py-3 bg-white shadow-sm font-work-sans"}>
            <nav className={"flex justify-between items-center"}>
                <Link href="/" >
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <div className="flex items-center gap-5">
                    {
                        session && session?.user ?(
                            <>
                                <Link href="/startup/create">
                                    <span className="text-gray-600 cursor-pointer">Create Startup</span>
                                </Link>

                                <form action={
                                    async ()=>{
                                        "use server";
                                        await signOut({redirectTo: "/"});
                                    }
                                }>
                                    <button type={"submit"} className={"text-gray-600 cursor-pointer"}>
                                        Logout
                                    </button>
                                </form>

                                <Link href={`/user/${session?.user?.id}`}>
                                    <span className="text-gray-600 cursor-pointer">{session?.user?.name}</span>
                                </Link>
                            </>
                        ):
                        (
                            <form action={async ()=>{
                                "use server";
                                await signIn('github');
                            }}>
                                <button type={"submit"}>
                                    Login
                                </button>
                            </form>
                        )}

                </div>

            </nav>
        </div>
    )
}


export default Navbar