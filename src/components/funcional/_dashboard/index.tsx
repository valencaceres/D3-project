import { useEffect } from "react"
import { useRouter } from "next/router"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"

import DashboardLayout from "~/layout/DashboardLayout"

import Cards from "~/components/funcional/helpers/Cards"

import { api } from "~/utils/api"

export default function Dashboard() {
    const { user } = useUser()
    const router = useRouter()

    

    const {data} = api.profesor.getAll.useQuery()

/*     useEffect(() => {
        if (user?.organizationMemberships[0]?.role !== "admin") {
          router.push("/");
        }
      }, [user, router]); */

  return (
    <div className="flex w-[73.8vw] justify-center flex-wrap">
        {data?.map(profesor =>         
          <div className="m-4"><Cards title='' description={profesor.name} style={profesor.style} instagram={profesor.instagram} link="" width="w-[22vw]" height="h-[50vh]"/></div>
        )}
    </div>

  )
}
