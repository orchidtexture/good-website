import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { basename, extname, join, dirname } from 'node:path';

const inputFile = process.argv[2];

if (!inputFile) {
  console.error('Usage: node convert-to-webp.mjs <input_file>');
  process.exit(1);
}

if (!existsSync(inputFile)) {
  console.error(`Error: File ${inputFile} not found.`);
  process.exit(1);
}

const dir = dirname(inputFile);
const ext = extname(inputFile);
const name = basename(inputFile, ext);
const outputFile = join(dir, `${name}.webp`);

async function convert() {
  try {
    const image = sharp(inputFile);
    const metadata = await image.metadata();

    console.log(`Converting ${inputFile} to ${outputFile} (${metadata.width}x${metadata.height})...`);

    await image
      .webp({
        quality: 80,
        effort: 6, // Equivalent to cwebp -m 6
      })
      .toFile(outputFile);

    console.log(`Success! Created ${outputFile}`);
  } catch (error) {
    console.error('Error: Conversion failed.');
    console.error(error.message);
    process.exit(1);
  }
}

convert();
