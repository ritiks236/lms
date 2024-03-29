"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
    const pathName = usePathname();

    const isCreatorPage = pathName?.startsWith('/creator')
    const isPlayerPage = pathName?.startsWith('/chapter')

    return (
        <div className="flex gap-x-2 ml-auto">
            { isCreatorPage || isPlayerPage ? (
                <Link href={'/'}>
                <Button size={"sm"} variant={"ghost"}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Exit
                </Button>
                </Link>
            ) : (
                <Link href='/creator/courses'>
                    <Button size={"sm"} variant={"ghost"}>Create</Button>
                </Link>
            )
            }
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}