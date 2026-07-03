import { AuthView } from "@neondatabase/auth/react/ui";


export default async function AuthPage({
    params
}: {
    params: Promise<{ pathname: string }>
 }){
    const { pathname } = await params
    return (
        <div className="flex max-w-7xl mx-auto min-h-screen items-center justify-center">
            <div className="w-full max-w-md flex flex-col items-center">
                <AuthView pathname={pathname} />
            </div>
        </div>
    )
}