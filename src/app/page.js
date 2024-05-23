import Image from "next/image";
import fw from "./images/fw.jpg"

export default function Home() {
	return (
		<section className="flex min-h-screen items-center justify-center gap-4 p-24">
			<h1 className='text-4xl font-mono'>Hello World!</h1>
			<Image className="w-[350px]" src={fw} alt="image description" />
		</section>
	);
}
