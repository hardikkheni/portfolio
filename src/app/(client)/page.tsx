import Image from 'next/image';

export default function Home() {
	return (
		<main className="container my-4 md:mx-auto min-h-screen py-3 px-3">
			<div className="flex flex-col md:flex-row gap-8 md:gap-o border-2 rounded-3xl border-black py-3 px-3">
				<div className="basis-1/3">
					<div className="flex items-center justify-center text-center">
						<div className="mt-16 px-2">
							<div className="inline-block mx-auto">
								<Image
									className="rounded-full"
									alt="Img"
									width={300}
									height={300}
									src="https://placehold.co/300x300/FFFFFF/000000/png"
								/>
								<h1 className="font-semibold text-4xl mt-8">
									Hardik <span className="font-light">Kheni</span>
								</h1>

								<h1 className="font-light text-lg mt-2">
									FULL STACK DEVELOPER
								</h1>
							</div>
							<div className="mt-8">
								<h1 className="font-semibold text-2xl">PROFILE</h1>
								<div className="mx-10 mt-2 text-left">
									I am a proficient Full Stack Developer, my extensive
									experience spans all stages of the web development cycle,
									creating dynamic, scalable web applications from concept to
									deployment. Leveraging a diverse skill set, I specialize in
									both client-side and server-side development, implementing
									efficient, maintainable code in a variety of languages and
									frameworks. I&apos;m a lifelong learner, continuously
									expanding my knowledge base and embracing emerging
									technologies. Currently, my focus is on enriching my expertise
									in low-level languages, particularly Rust and Go, while
									maintaining a robust grounding in end-to-end web solutions,
									thereby ensuring optimal performance and user experience.
								</div>
							</div>

							<hr className="mt-8 border-b border-black	w-2/4 mx-auto" />

							<div className="mt-8">
								<h1 className="font-base medium text-2xl">PHONE NUMBER</h1>
								<div className="bg-opacity-20 bg-white rounded-md shadow border border-white border-opacity-20 mx-10 mt-2">
									<div className="text-opacity-100 text-black text-center">
										+919624130428
									</div>
								</div>
							</div>

							<div className="mt-6">
								<h1 className="font-base medium text-2xl">EMAIL</h1>
								<div className="bg-opacity-20 bg-white rounded-md shadow border border-white border-opacity-20 mx-10 mt-2">
									<div className="text-opacity-100 text-black text-center">
										hardikkheni.work@gmail.com
									</div>
								</div>
							</div>

							<div className="mt-6">
								<h1 className="font-base medium text-2xl">ADDRESS</h1>
								<div className="bg-opacity-20 bg-white rounded-md shadow border border-white border-opacity-20 mx-10 mt-2">
									<div className="text-opacity-100 text-black text-center">
										Surat, Gujarat, India.
									</div>
								</div>
							</div>

							<hr className="mt-8 border-b border-black	w-2/4 mx-auto" />

							<div className="mt-8">
								<h1 className="font-semibold text-2xl">Languages</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="basis-2/3 bg-white rounded-3xl">
					<div className="mx-20 mt-20">
						<button className="bg-black text-white block w-full py-2 rounded-lg">
							WORK HISTORY
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
