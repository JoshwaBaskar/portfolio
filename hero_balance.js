const fs = require('fs');
const path = 'c:/Users/joshw/OneDrive/Documents/Portfolio/portfolio.html';
const s = fs.readFileSync(path, 'utf8');
const start = s.indexOf('function Hero()');
const end = s.indexOf('/* ===== ABOUT ===== */', start);
if (start === -1 || end === -1) {
  console.error('Hero block not found');
  process.exit(1);
}
const block = s.slice(start, end);
const lines = block.split('\n');
let stack = [];
const pairs = { '(': ')', '{': '}', '[': ']' };
for (let i = 0; i < block.length; i++) {
  const ch = block[i];
  if (ch === '(' || ch === '{' || ch === '[') stack.push({ ch, i });
  else if (ch === ')' || ch === '}' || ch === ']') {
    const last = stack.pop();
    if (!last || pairs[last.ch] !== ch) {
      const line = block.slice(0, i).split('\n').length;
      console.error('Mismatch at pos', i, 'char', ch, 'expected', last ? pairs[last.ch] : null, 'line', line);
      const ll = block.split('\n');
      const startLine = Math.max(0, line - 5);
      const endLine = Math.min(ll.length, line + 5);
      for (let j = startLine; j < endLine; j++) {
        console.error((j + 1).toString().padStart(4, ' ') + ': ' + ll[j]);
      }
      process.exit(1);
    }
  }
}
console.log('Hero block balanced, stack length', stack.length);
if (stack.length > 0) {
  console.error('Remaining stack:');
  stack.slice(-10).forEach(t => {
    const line = block.slice(0, t.i).split('\n').length;
    console.error('  ', t.ch, 'at line', line);
  });
}
