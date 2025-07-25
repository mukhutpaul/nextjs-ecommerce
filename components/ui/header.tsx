import Image from "next/image"
import Link from "next/link"
import logoBrandColor from "@/app/logoBrandColor.png"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ListOrderedIcon, MessageSquareText, User } from "lucide-react"
import { Button } from "./button"
import SignUpButton from "./SignUpButton"
import fetchUserSession from "@/actions/fetchUserSession"
import LogoutForm from "./LogoutForm"

async function Header() {
    const user = await fetchUserSession();

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
                <SignUpButton />
                </>

               ):(
                <>
                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger className="headerLink">
                        <User size={24}/>
                        <span className="hover:text-primary">
                            My Alibaba
                        </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="mr-16 p-2 overflow-hidden w-80" sideOffset={8}>
                        <p className="text-[#222] text-sm p-4 font-semibold">
                            Hi, {user.formData.find((f:any) => f.marker === "fullname")?.values}
                        </p>
                       
                       <hr className="border-[#ddd] w-[90%] mx-auto"/>

                    <div className="w-full flex flex-col my-2">
                        <Link
                        href={"/"}
                        className="headerDropdownLink font-semibold"
                        >
                        My Alibaba
                        </Link>
                        <Link href={"/"} className="headerDropdownLink">
                        Manage RFQ
                        </Link>
                        <Link href={"/"} className="headerDropdownLink">
                        Orders
                        </Link>
                        <Link href={"/"} className="headerDropdownLink">
                        Favorites
                        </Link>
                        <Link href={"/"} className="headerDropdownLink">
                        Account
                        </Link>
                    </div>
                    <hr className="border-[#ddd] w-[90%] mx-auto" />

                    <div className="flex flex-col my-2 my-2">
                        <Link href={'/'} className="headerDropdownLink hover:font-normal">
                        <span>Membership Program</span>
                        <p className="text-primary">
                            3-days coupon giveaway : up to US $80 off
                        </p>
                        </Link>
                    </div>
                    <hr className="border-[#ddd] w-[90%] mx-auto" />
                    <LogoutForm />
                    </HoverCardContent>
                </HoverCard>

                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger className="headerLink">
                        <MessageSquareText size={24}/>
                        <span className="hover:text-primary">
                            Messages
                        </span>
                    </HoverCardTrigger>
                    <HoverCardContent hidden>
                        The React Framework - created and maintained by @vercel
                       
                    </HoverCardContent>
                </HoverCard>

                
                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger className="headerLink">
                        <ListOrderedIcon size={24}/>
                        <span className="hover:text-primary">
                            Orders
                        </span>
                    </HoverCardTrigger>
                    <HoverCardContent hidden>
                        The React Framework - created and maintained by @vercel
                       
                    </HoverCardContent>
                </HoverCard>

                {/* <CardLink /> */}

                </>

               )}
            </div>
        </div>
    </header>
  )
}

export default Header