export const metadata = {
    title: 'Sanity Studio - Venus Estetika',
    description: 'Administration Panel',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
