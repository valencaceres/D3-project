import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function dashboard() {
    const { user } = useUser()
    const router = useRouter()
/*     useEffect(() => {
        if (user?.organizationMemberships[0]?.role !== "admin") {
          router.push("/");
        }
      }, [user, router]); */
  return (
    <div className="flex justify-center align-center h-[100vh]">
      <div className="h-[50vh] w-[30vw] bg-red-900"></div>
    </div>
  )
}
