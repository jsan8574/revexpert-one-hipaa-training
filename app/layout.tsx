import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'HIPAA in Practice Every Record Matters | RevExpert One',description:'A story-driven HIPAA Privacy and Security learning experience for healthcare operations professionals.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
