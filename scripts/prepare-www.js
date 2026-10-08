const fs = require('fs');
fs.mkdirSync('www', { recursive: true });
const src = fs.existsSync('web/index.html') ? 'web/index.html' : 'index.html';
fs.copyFileSync(src, 'www/index.html');
fs.copyFileSync('node_modules/hls.js/dist/hls.min.js', 'www/hls.min.js');
console.log('www/ ready');
