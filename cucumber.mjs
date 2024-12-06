import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  import: ["import=ts-node/esm", "features/**/*.ts"],
  paths: ["features/**/*.feature"],
  format: ["progress-bar", "html:cucumber-report.html"],
  requireModule: ["ts-node/register/esm"],
};
