import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import { UserButton, useSession, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

function Nav() {
    const router = useRouter();
    const { isSignedIn } = useSession();
    const { user } = useUser();

  return (
        <nav className="fixed z-50 w-full bg-[#202020] ">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between   text-white">
        <Link href={"/"}>
          <Image src={"/D3_Blanco.png"} width={110} height={60} alt="d3 logo" />
        </Link>
        <div className="flex items-center gap-6 ">
          <Link href={"/"} className="py-2 capitalize hover:border-b">
            home
          </Link>
          <Link href={"/studio"} className="py-2 capitalize hover:border-b">
            studio
          </Link>
          <Link href={"/crew"} className="py-2 capitalize hover:border-b">
            crew
          </Link>
          <Link href={"/training"} className="py-2 capitalize hover:border-b">
            entretenimiento
          </Link>
          <Link href={"/contactus"} className="py-2 capitalize hover:border-b">
            contactanos
          </Link>
          {user?.organizationMemberships[0]?.role === "admin" ? (
            <Link href={"/dashboard"} className="py-2 capitalize hover:border-b">Dashboard</Link>
          ):
          null
          }
          {isSignedIn ? (
            <>
              <UserButton afterSignOutUrl="/"/>
            </>
          ) : (
            <Button
              onClick={() => void router.push("/sign-in")}
              variant={"outline"}
              className="border-white text-white hover:bg-destructive-8 hover:text-white"
            >
              Iniciar Sesión
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav