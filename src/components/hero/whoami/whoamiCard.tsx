import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { CubeIcon } from "@radix-ui/react-icons";

export function WhoamiCard() {
	return (
			<Alert>
				<CubeIcon className="h-4 w-4" />
				<AlertTitle className="font-bold mb-2">Who am I ?</AlertTitle>
				<AlertDescription>I'm a Web Developer, FullStack Developer & OSS Developer.</AlertDescription>
				<AlertDescription>I have experience in building web applications & useful tool.</AlertDescription>
			</Alert>
	);
}