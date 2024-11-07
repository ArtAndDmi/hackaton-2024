import type {Metadata} from "next"
import localFont from "next/font/local"
import { Montserrat } from 'next/font/google';
import "./globals.css"

const drukWideCyr = localFont({
    src: "./fonts/druktextwidecyr-medium.otf",
    weight: "100 900",
    variable: "--font-druk-wide-cyr",
})

const drikWideCyrBold = localFont({
    src: "./fonts/drukwidecyr.woff2",
    weight: "100 900",
    variable: "--font-druk-wide-cyr-bold",
})


const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '700'],
    variable: "--font-montserrat",
})

export const metadata: Metadata = {
    title: "Цифровой суверенитет",
    description: "Национальный студенческий хакатон",
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${drukWideCyr.variable} ${montserrat.className} ${drikWideCyrBold.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    )
}
