import { init } from "@autosoft/autorepo-api";
import enquirer from "enquirer";

const { cwd, monorepo } = await enquirer.prompt<{ cwd: string; monorepo: boolean; }>([{
  type: "input",
  name: "cwd",
  message: "Would you like to create a project here, or in another directory?",
  default: "."
}, {
  type: "confirm",
  name: "monorepo",
  message: "Is this a monorepo?",
  default: false
}] as any);

await init({ monorepo, cwd });
