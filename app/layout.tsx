import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Header} from "@/components/header";
import {ActiveSectionContextProvider} from "@/context/active-section-context";
import React, {ReactNode} from "react";
import {Footer} from "@/components/footer";
import {ThemeSwitch} from "@/components/theme-switch";
import {ThemeContextProvider} from "@/context/theme-context";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Bogdan | Personal portfolio',
    description: 'Bogdan is a frontend developer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en" className='!scroll-smooth'>
        <body className={`${inter.className} bg-gray-50 text-gray-950 relative
        pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem]
        -z-10 rigth-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
      w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5]
      dark:bg-[#676394]'></div>
        <ThemeContextProvider>
            <ActiveSectionContextProvider>
                <Header/>
                {children}
                <Footer/>
                <ThemeSwitch/>
            </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
        </html>
    )
}
