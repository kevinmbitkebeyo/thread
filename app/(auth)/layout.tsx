import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css'

export const metadata = {
    title:'threads',
    description:'A Next.js  thread application'
}

const inter = Inter({subsets:["latin"]})

export default function RootLayout({
    children
}:{
    children:React.ReactNode
}) {
    return <ClerkProvider>
<html lang="en">
    <body className={''} > 
    {children}
    </body>
</html>
    </ClerkProvider>
}