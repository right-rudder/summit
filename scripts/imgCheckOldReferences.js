#!/usr/bin/env node

// This script scans the project for old image references that still
// exist in the code after renaming and updating.
// It DOES NOT modify any file.
// It outputs a CSV report with:
// filePath, lineNumber, oldImagePath, newImagePath

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "csv-parse";
import { scanDirectory, CSV_COLUMNS, CSV_ERRORS } from "./imgNewNameCSV.js";

const SRC_FILE_EXT = [".astro", ".js", ".ts", ".jsx", ".md", ".mdx"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function parseCSV() {
  const csvPath = path.join(__dirname, "output.csv");
  const records = [];

  const parser = fs.createReadStream(csvPath).pipe(parse({ delimiter: "," }));

  for await (const record of parser) {
    records.push(record);
  }

  return records;
}

async function scanFileForOldRefs(filePath, records, results) {
  const content = await fs.promises.readFile(filePath, "utf8");
  const lines = content.split("\n");

  for (const record of records) {
    const oldRef = record[CSV_COLUMNS.ORIGINAL_IMG_RELATIVE_PATH];
    const newRef = record[CSV_COLUMNS.NEW_IMG_RELATIVE_PATH];

    lines.forEach((line, index) => {
      if (line.includes(oldRef)) {
        results.push({
          file: filePath,
          line: index + 1,
          oldRef,
          newRef,
        });
      }
    });
  }
}

async function scanProject() {
  const srcDir = path.join(__dirname, "../src");
  const files = await scanDirectory(srcDir, SRC_FILE_EXT);

  const records = await parseCSV();

  const validRecords = records.filter(
    (r) => r[CSV_COLUMNS.ERROR] === CSV_ERRORS.OK,
  );

  const results = [];

  for (const file of files) {
    try {
      await scanFileForOldRefs(file, validRecords, results);
    } catch (err) {
      console.error(`--- ERROR scanning file: ${file}`, err.message);
    }
  }

  return results;
}

async function generateReportCSV(results) {
  const csvPath = path.join(__dirname, "oldReferencesReport.csv");

  if (results.length === 0) {
    await fs.promises.writeFile(csvPath, "", "utf8");
    console.log("### No old references found! Empty CSV created.");
    return;
  }

  const rows = results.map((item) =>
    [item.file, item.line, item.oldRef, item.newRef].join(","),
  );

  const csvString = rows.join("\n");

  await fs.promises.writeFile(csvPath, csvString, "utf8");
  console.log(`### Report generated: ${csvPath}`);
}

async function run() {
  console.log("### Checking for old image references...");
  const results = await scanProject();
  await generateReportCSV(results);

  console.log("### DONE");
}

await run();
