import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "src/App.jsx",
  "src/main.jsx",
  "src/data/siteData.jsx",
  "src/components/Logo.jsx",
  "src/components/Nav.jsx",
  "src/components/ServiceCard.jsx",
  "src/components/Footer.jsx",
  "src/pages/HomePage.jsx",
  "src/pages/AboutPage.jsx",
  "src/pages/ServicesPage.jsx",
  "src/pages/ContactPage.jsx",
  "src/styles/app.css",
];

const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length) {
  console.error("Missing component files:\n" + missing.map((file) => "- " + file).join("\n"));
  process.exit(1);
}

const app = readFileSync("src/App.jsx", "utf8");
const expectedImports = ["Nav", "Footer", "HomePage", "AboutPage", "ServicesPage", "ContactPage"];
const missingImports = expectedImports.filter((name) => !app.includes(name));
if (missingImports.length) {
  console.error("App.jsx is missing expected component references: " + missingImports.join(", "));
  process.exit(1);
}

console.log("Component structure OK (" + requiredFiles.length + " files checked).");
