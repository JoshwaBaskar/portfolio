const fs = require('fs');
const fn = 'c:/Users/joshw/OneDrive/Documents/Portfolio/portfolio.html';
const s = fs.readFileSync(fn, 'utf8');
const start = s.indexOf('function Hero()');
const end = s.indexOf('/* ===== ABOUT ===== */', start);
const block = s.slice(start, end);
const lines = block.split('\n');
console.log('Hero block length', lines.length);
for (let i = 0; i < lines.length; i++) {
  console.log((i+1).toString().padStart(3,' ')+': '+lines[i]);
}
