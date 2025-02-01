import react from 'react'
import Navbar from "@/app/components/Navbar";

export default function Layout({ children }:{children:react.ReactNode}) {
    return (
            <main className={"font-work-sans"}>
                <Navbar/>
                {children}
            </main>

    )
}

