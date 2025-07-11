import Image from "next/image"
import Link from "next/link"
import logoBrandColor from "@/app/logoBrandColor.png"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { User } from "lucide-react"
import { Button } from "./button"

async function Header() {
    //const user = await fetchUserSession();
    const user = false
  return (
    <header className="w-full bg-white py-4 px-5 md:px-8 flex items-center justify-between text-[#333]">
        <Link
        href={'/'}
        >
        <Image 
        src={logoBrandColor}
        alt="logoBrandColor"
        className="w-48 object-contain"
        
        />
        </Link>

        <div>
            <div className="flex items-center space-x-8">

               {!user ?(
                <>
                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger className="flex items-center text-[#333] text-sm cursor-pointer gap-x-1.5">
                        <User size={20}/>
                        Sign in
                    </HoverCardTrigger>
                    <HoverCardContent className="space-y-2">
                        <p className="text-[#222] text-sm font-semibold">Welcom to alibaba.com</p>
                        
                        <Button asChild className="rounded-full w-full" size={'sm'}>
                            <Link href={'/login'}>
                             Sign in
                            </Link>

                        </Button>
                    </HoverCardContent>
                </HoverCard>
                {/* <SignUpButton /> */}
                </>

               ):(
                <p>Logged in</p>

               )}
            </div>
        </div>
    </header>
  )
}

export default Header