'use client' // client side rendering
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgotpassword" }
]

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname()

    return (
        <div>
            {children}
            {
                navLinks.map((link) => {

                    const isActive = pathname.startsWith(link.href)

                    return (
                        <Link href={link.href}
                            key="link.name"
                            className={isActive ? "text-yellow-400 font-serif font-bold" : "text-blue-400"}>
                            {link.name}
                        </Link>
                    )
                })}
        </div>
    );
}
