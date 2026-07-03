import Link from "next/link";


export default function Navbar(){
    return (
        <nav className="bg-slate-800 border-b border-slate-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="h-16 flex justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-primary text-xl font-bold">
                            Event Planner
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link 
                            href="/"
                            className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Events
                        </Link>
                        <div className="flex items-center space-x-2">
                            <Link 
                                href="/login"
                                className="bg-primary text-background px-4 py-2 text-sm rounded-md font-medium hover:bg-primary/90 transition-colors"
                            >
                                Sign in with Github
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}