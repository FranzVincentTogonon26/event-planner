import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@neondatabase/auth/react/ui";
import Link from "next/link";
import { buttonVariants } from "../ui/button";


export default function Navbar(){
    return (
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href={"/"} className="text-md font-semibold tracking-wide">
                Event Planner
            </Link>
            <nav className="">
                <SignedIn>
                    <Link href={"/dashboard"} className="text-sm text-muted-foreground">
                        Dashboard
                    </Link>
                    <UserButton size="icon" style={{ background: "transparent" }} />
                </SignedIn>
                <SignedOut>
                    <div className="ml-auto flex items-center gap-2">
                        <Link 
                            href={"/auth/sign-in"}
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "default"})
                            )}
                        >
                        Log In
                        </Link>
                        <Link 
                            href={"/auth/sign-up"}
                            className={cn(
                                buttonVariants({ variant: "default"})
                            )}
                        >
                            Sign Up
                        </Link>
                    </div>
                </SignedOut>
            </nav>
        </div>
    )
}