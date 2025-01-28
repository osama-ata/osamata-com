const fs = require('fs');
const path = require('path');
const glob = require('glob');

const generateIndex = () => {
  const docsDir = path.join(__dirname, '../../docs'); // Adjusted path
  console.log('Docs Directory:', docsDir);

  const files = glob.sync('**/*.{md,mdx}', { cwd: docsDir });
  console.log('Matched Files:', files);

  if (files.length === 0) {
    console.log('No files matched. Check the directory structure and file extensions.');
    return;
  }

  const searchIndex = files.map((file) => {
    const filePath = path.join(docsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = content.match(/title:\s*(.*)/);
    const title = titleMatch ? titleMatch[1] : file;

    return {
      id: file.replace(/\.(md|mdx)$/, ''),
      title,
      content,
    };
  });

  const staticDir = path.join(__dirname, '../../static');
  if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(staticDir, 'search-index.json'),
    JSON.stringify(searchIndex, null, 2)
  );

  console.log('Search Index Generated:', searchIndex.length, 'files processed.');
};

generateIndex();
