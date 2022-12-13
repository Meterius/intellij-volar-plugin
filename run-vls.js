const cp = require("child_process");
const fs = require("fs");
const path = require("path");

// Temporary script to catch communication of VLS and IntelliJ,
// needs to be replaced by proper invocation of vls, assuming that possibly no
// global installation exists.
// For now, requires Windows and "npm i -g vls"

try {
    fs.mkdirSync(path.join(__dirname, "log"));
} catch(err) {
    if (err.code !== "EEXIST") throw err;
}

const inst = cp.spawn("C:/Program Files/nodejs/npx.cmd", ["vls"]);

inst.stdout.on('data', (chunk) => {
	fs.appendFileSync(path.join(__dirname, "log/log-stdout.txt"), chunk.toString());
	process.stdout.write(chunk);
});

inst.stderr.on('data', (chunk) => {
	fs.appendFileSync(path.join(__dirname, "log/log-stderr.txt"), chunk.toString());
	process.stderr.write(chunk);
});

process.stdin.on('data', (chunk) => {
	fs.appendFileSync(path.join(__dirname, "log/log-stdin.txt"), chunk.toString());
	inst.stdin.write(chunk);
});
