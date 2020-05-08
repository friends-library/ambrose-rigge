const fs = require('fs');
const { lint } = require('../fl/packages/adoc-lint/dist/index.js');

// console.log(typeof lint);
// console.log(lint);

const modified = JSON.parse(
  fs.readFileSync(`${process.env.HOME}/files_modified.json`).toString(),
);
const added = JSON.parse(
  fs.readFileSync(`${process.env.HOME}/files_added.json`).toString(),
);

const checkFiles = modified.concat(added).filter(f => f.endsWith('.adoc'));

checkFiles.forEach(path => {
  console.log(lint(fs.readFileSync(path).toString()));
});
