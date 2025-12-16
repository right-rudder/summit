#!/usr/bin/env node

// This script reads a CSV file with original image names and new image names for this project and renames the files accordingly, as well as, replaces those files references in code with new names.
// Required npm package: csv-parse
//
// To run:
// On the VS Code terminal at the root of the project run "node ./scripts/imgRenaming.js"
// You can also add the command above in the package.json similar to the astro commands:
// "scripts": {
//    "dev": "astro dev",
//    "img:renaming": "node ./scripts/imgRenaming.js",
// },
// And then run the command in the terminal as "npm run img:renaming"

// ########################################################################################################################################
// ### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###
// ########################################################################################################################################
//
//   The expected project directory configuration is as follows.
//   If this file or the CSV file is not in the expected directory or the directory configuration is different from this, the script won't work:
//
//   root
//   [...]
//   /scripts
//     thisFile.js
//     images-to-rename.csv
//   /src
//   [...]
//
// ########################################################################################################################################
// ### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###### IMPORTANT ###
// ########################################################################################################################################

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "csv-parse";
import { scanDirectory, CSV_COLUMNS, CSV_ERRORS } from "./imgNewNameCSV.js";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const SRC_FILE_EXT = [".astro", ".js", ".ts", ".jsx", ".md", ".mdx", ".mjs"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const importFilePath = process.argv[1].includes("\\")
  ? import.meta.url.replace("file:///", "").replaceAll("/", "\\")
  : import.meta.url.replace("file://", "");

const isCommandLineExecution = importFilePath === process.argv[1];
let rl;

async function parseCSV() {
  console.log("### Parsing CSV file");

  const records = [];
  const csvPath = `${__dirname}/images-to-rename.csv`;

  let parser;
  try {
    parser = fs.createReadStream(csvPath).pipe(
      parse({
        delimiter: ",",
      }),
    );
  } catch (err) {
    console.error(`--- ERROR: Couldn't parse the CSV file: "${csvPath}".`, err);
    return records;
  }

  for await (const record of parser) {
    records.push(record);
  }

  return records;
}

async function renameImages(records) {
  console.log("### Renaming images");

  let yesAll = false;
  let noAll = false;

  for (const record of records) {
    if (noAll) {
      record[CSV_COLUMNS.ERROR] = CSV_ERRORS.USER_SKIPPED;
      continue;
    }

    if (![CSV_ERRORS.OK, CSV_ERRORS.USER_SKIPPED].includes(record[CSV_COLUMNS.ERROR])) {
      continue;
    }

    try {
      await fs.promises.access(
        record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH],
        fs.promises.constants.F_OK,
      );

      // Original file exists. Safe to rename.
    } catch (error) {
      console.log(
        `### Operation skipped, the following file does not exist (or there was an unforeseen error):\n${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}\n`,
      );

      record[CSV_COLUMNS.ERROR] = CSV_ERRORS.ORIGINAL_DOES_NOT_EXIST;
      continue;
    }

    try {
      await fs.promises.access(
        record[CSV_COLUMNS.NEW_IMG_FULL_PATH],
        fs.promises.constants.F_OK,
      );

      console.error(
        `--- ERROR: Renamed file already exists, skipping file renaming.\n${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}\n"${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}"\n${err.message}`,
      );

      record[CSV_COLUMNS.ERROR] = CSV_ERRORS.RENAMED_ALREADY_EXISTS;
      continue;
    } catch (error) {
      // The renamed file doesn't exist. Safe to rename.
    }

    if (!yesAll && isCommandLineExecution) {
      const answer = await rl.question(
        `### Do you want to proceed with the following renaming operation? (y/n | yes/no | yesAll/noAll):\n${record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH]}\n${record[CSV_COLUMNS.NEW_IMG_FULL_PATH]}\n`,
      );

      if (!["yes", "y", "yesall", "noall"].includes(answer.toLowerCase())) {
        record[CSV_COLUMNS.ERROR] = CSV_ERRORS.USER_SKIPPED;
        console.log("### Operation skipped");

        continue;
      } else if (answer.toLowerCase() === "yesall") {
        yesAll = true;
      } else if (answer.toLowerCase() === "noall") {
        noAll = true;
        record[CSV_COLUMNS.ERROR] = CSV_ERRORS.USER_SKIPPED;
        console.log("### Operations skipped");

        continue;
      }
    }

    try {
      await fs.promises.rename(
        record[CSV_COLUMNS.ORIGINAL_IMG_FULL_PATH],
        record[CSV_COLUMNS.NEW_IMG_FULL_PATH],
      );

      console.log("### File renamed successfully!");
    } catch (err) {
      console.error(`--- ERROR: Couldn't rename the file:`, err.message);
      continue;
    }
  }
}

function replaceImageReferences(csvRecords, fileContent) {
  for (const record of csvRecords) {
    fileContent = fileContent.replaceAll(
      `"${record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH]}"`,
      `"${record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH]}"`,
    );

    fileContent = fileContent.replaceAll(
      `'${record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH]}'`,
      `'${record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH]}'`,
    );

    // For Markdown img links. Ex: ![Come check out our fleet at Falcon Field Airport (KFFZ)!](/blog/SimpliFly-KFFZ-aircraft.webp)
    fileContent = fileContent.replaceAll(
      `(${record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH]})`,
      `(${record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH]})`,
    );

    // For Markdown frontmatter. Ex: heroImage: /src/assets/logos/SolidGround-Symbol-1.png
    fileContent = fileContent.replaceAll(
      `: ${record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH]}`,
      `: ${record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH]}`,
    );
  }

  return fileContent;
}

async function substituteImageFileReferences(records) {
  console.log(`### Substituting image file references in the "src" folder`);
  const srcDir = path.join(__dirname, "../src");

  const files = await scanDirectory(srcDir, SRC_FILE_EXT);

  const filteredRecords = records.filter(
    (record) => record[CSV_COLUMNS.ERROR] === CSV_ERRORS.OK,
  );

  files.push(path.join(__dirname, "../tailwind.config.mjs"));

  for (const filePath of files) {
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");
      const updatedContent = replaceImageReferences(filteredRecords, data);

      if (data === updatedContent) {
        continue;
      }

      try {
        await fs.promises.writeFile(filePath, updatedContent, "utf-8");

        console.log("### File updated successfully: ", filePath);
      } catch (err) {
        console.error("--- ERROR: Error writing file:", err);
      }
    } catch (err) {
      console.error(
        `--- ERROR: Error reading a file: "${filePath}".`,
        err.message,
      );
    }
  }
}

async function generateUpdatedCSVfile(records) {
  console.log(`### Creating new CSV file with updated image renaming status`);

  const csvString = records.map((row) => row.join(",")).join("\n");

  try {
    await fs.promises.writeFile(
      path.join(__dirname, "images-to-rename-updated.csv"),
      csvString,
      "utf-8",
    );

    console.log("### CSV file saved successfully!");
  } catch (err) {
    console.error("--- Error writing CSV file:", err);
  }
}

async function runCommand() {
  if (!isCommandLineExecution) return;
  
  rl = createInterface({ input, output });

  const records = await parseCSV();
  if (records.length === 0) {
    return;
  }

  await renameImages(records);
  await substituteImageFileReferences(records);
  await generateUpdatedCSVfile(records);

  rl.close();
}

await runCommand();

export { renameImages };
