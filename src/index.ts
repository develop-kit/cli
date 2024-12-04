import { Command } from "commander";

const program = new Command();

program
  .name("my-cli")
  .description("An example CLI built with TypeScript")
  .version("1.0.0");

program
  .command("greet <name>")
  .description("Greet a person")
  .option("-u, --uppercase", "Convert the name to uppercase")
  .action((name: string, options: { uppercase: boolean }) => {
    const greeting = options.uppercase
      ? `Hello, ${name.toUpperCase()}!`
      : `Hello, ${name}!`;
    console.log(greeting);
  });

program.parse(process.argv);
