console.log(process.argv);
console.log('Contains API Key: ' + (process.argv.includes("--api-key") || process.argv.includes("-k")));
