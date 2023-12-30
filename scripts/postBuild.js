const fs = require('fs');
const path = require('path');

let processedFiles = 0;

const replaceInFiles = (directory, search, replace) => {
  if (!fs.existsSync(directory)) {
    console.error(`Error: ${directory} does not exist.`);
    return;
  }

  const files = fs.readdirSync(directory);

  // Process files
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      replaceInFiles(filePath, search, replace);
    } else if (file.endsWith('.html')) {
      // Perform replacement
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(new RegExp(search, 'g'), replace);
      fs.writeFileSync(filePath, content, 'utf8');

      processedFiles++;
    }
  });
};

const search = '@assets';
const replace = 'https://assets-domain.com/folder';
const buildDirectory = 'site/.vitepress/dist'; // Update this with your actual build directory

console.log('\nContent replacement in progress...');
const startTime = new Date();
replaceInFiles(buildDirectory, search, replace);
const endTime = new Date();
const processingDuration = (endTime - startTime)/1000;

// Log processed files globally
console.log(`Processed ${processedFiles} files`);
console.log(`Content replacement complete in ${processingDuration}s`);

