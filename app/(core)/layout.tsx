import Navbar from "@/components/layout/Navbar"


export default async function CoreLayout({
    children,
} : {
    children: React.ReactNode
}){
    return (
        <>
            <header className="border-b backdrop-blur">
                <Navbar />   
            </header>
            <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8">
                {children}
            </main>
        </>
    )
}