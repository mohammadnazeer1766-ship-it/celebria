const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.js', 'utf8');

content = content.replace(/â‚¹/g, '₹');

fs.writeFileSync('src/data/mockData.js', content, 'utf8');
console.log("Mojibake fixed");
