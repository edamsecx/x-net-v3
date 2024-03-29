import { useEffect, useRef } from "react";
import { candoList } from "./candoData";
import { cn } from "@/src/utils/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carousel";

export function Cando() {
	return (
		<>
			<div className="w-full min-h-[500px] flex justify-center items-center">
				<ParallaxBackGround />
				<Card className="w-4/5 sm:w-3/4 h-4/5 sm:h-3/4 min-h-[400px] bg-transparent backdrop-blur-sm">
					<CardHeader>
						<CardTitle className="inline-flex gap-x-2">
							What I can do <div className="animate-spin">🤔</div>
						</CardTitle>
					</CardHeader>
					<CardContent className="w-full flex justify-center items-center">
						<Carousel className="w-full max-w-xl md:max-w-3xl">
							<CarouselContent>
								{candoList.map((cando, index) => (
									<CarouselItem key={index} className="basis-full md:basis-1/2">
										<div className="p-1">
											<Card className="bg-[hsl(var(--background))] bg-opacity-75">
												<CardContent className="flex flex-col justify-center aspect-[4/3]">
													<Label className="text-xl font-bold mt-4">{cando.title}</Label>
													<hr className="mt-1" />
													<div className="mt-3 text-xs sm:text-sm leading-5">
														{cando.description}
													</div>
													<div className="mt-auto pt-[-10px]">{cando.button}</div>
												</CardContent>
											</Card>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</CardContent>
				</Card>
			</div>
		</>
	);
}

function ParallaxBackGround() {
	const triggerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const trigger = triggerRef.current;
		if (!trigger) {
			return;
		}

		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			trigger,
			{
				yPercent: 50,
			},
			{
				yPercent: -50,
				scrollTrigger: {
					trigger: trigger,
					start: "top bottom",
					end: "bottom top",
					scrub: 1,
				},
			},
		);
	}, []);

	return (
		<div className="absolute top-[600px] w-full h-screen z-[-1]" ref={triggerRef}>
			<IconObject name="nextjs/nextjs-original" className="relative top-[120px] left-[2.5vw]" />
			<IconObject
				name="github/github-original"
				className="relative top-[100px] left-[97.5%] translate-x-[-100%]"
			/>
			<IconObject name="react/react-original" className="relative top-[120px] left-[3vw]" />
			<IconObject
				name="typescript/typescript-original"
				className="relative top-[100px] left-[97.5%] translate-x-[-100%] rounded-md"
			/>
			<IconObject
				name="denojs/denojs-original"
				className="relative top-[120px] left-[2.5vw] bg-white rounded-full"
			/>
			<IconObject name="nodejs/nodejs-plain" className="relative top-[100px] left-[97.5%] translate-x-[-100%]" />
			<IconObject name="vscode/vscode-original" className="relative top-[120px] left-[2.5vw]" />
			<IconObject name="bash/bash-plain" className="relative top-[100px] left-[97.5%] translate-x-[-100%]" />
		</div>
	);
}

function IconObject({ name, className, ref }: { name: string; className?: string; ref?: React.Ref<HTMLImageElement> }) {
	return (
		<img
			ref={ref}
			src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + name + ".svg"}
			className={cn("transition-all transiton-duration-300 drop-shadow-xl", className)}
			style={{
				filter: "drop-shadow(0 0 0.1rem white)",
			}}
			loading="lazy"
			width={75}
			height={75}
			alt={name}
		/>
	);
}
