#!/usr/bin/env node
import { program } from "commander";
import pkg from "../package.json";
import { add } from "./commands/add";

program
	.name(pkg.name)
	.version(pkg.version, "-v, --version")
	.description(pkg.description);

program.addCommand(add);

program.parse();
