import { useRouter } from "next/router";
import { Button } from "../ui/button";
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
          {isSignedIn ? (
            <>
              {user?.publicMetadata.role === "customer" && (
                <Link
                  className={`rounded-md p-2 font-semibold duration-75 ${
                    router.pathname.includes("/my-courses")
                      ? "bg-violet-400"
                      : "hover:bg-violet-400"
                  }`}
                  href={"/my-courses"}
                >
                  Mis cursos
                </Link>
              )}
              {user?.publicMetadata.role === "admin" && (
                <Link
                  className={`rounded-md p-2 font-semibold duration-75 ${
                    router.pathname.includes("/dashboard")
                      ? "bg-[#fdfbfb]"
                      : "hover:bg-destructive-8"
                  }`}
                  href={"/dashboard"}
                >
                  Dashboard
                </Link>
              )}
              <UserButton />
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