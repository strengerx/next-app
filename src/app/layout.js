import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className='font-mono text-xl p-10'>
				<nav>
					<ul>
						<li><Link href="/">home</Link></li>
						<li><Link href="/users">users</Link></li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
