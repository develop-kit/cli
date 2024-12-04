import { Command } from "commander";

export const add = new Command("add")
	.description("applies to base packages")
	.option("-u, --uppercase", "Convert the name to uppercase")
	.action((name: string, options: { uppercase: boolean }) => {
		const greeting = options.uppercase
			? `Hello, ${name.toUpperCase()}!`
			: `Hello, ${name}!`;
		console.log(greeting);
	});
