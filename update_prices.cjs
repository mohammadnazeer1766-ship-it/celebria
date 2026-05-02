const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.js', 'utf8');

// Replace "? with "₹ (PowerShell might have messed up the dollar sign replacement)
content = content.replace(/"\?/g, '"₹');
// Just in case any "$ were left
content = content.replace(/"\$/g, '"₹');

fs.writeFileSync('src/data/mockData.js', content, 'utf8');
console.log("Prices updated to ₹");
