import { getSessionUser } from "@/lib/auth"
import { redirect } from "next/navigation";


export default async function DashboardPage(){
    const user = await getSessionUser();
    if(!user){
        redirect("/auth/sign-in")
    }
    return (
        <div className="">
            Dashboard
        </div>
    )
}