const fs = require('fs');
const path = 'c:/Users/joshw/OneDrive/Documents/Portfolio/portfolio.html';
const s = fs.readFileSync(path, 'utf8');
// Find the big IIFE script by locating the ReactDOM.createRoot call
let idx = s.indexOf('ReactDOM.createRoot');
if (idx === -1) idx = s.indexOf('(function(){');
if (idx === -1) {
  console.error('Could not find script start');
  process.exit(2);
}
// backtrack to the opening <script
let scriptStart = s.lastIndexOf('<script', idx);
if (scriptStart === -1) scriptStart = 0;
let scriptTagEnd = s.indexOf('>', scriptStart);
let scriptEnd = s.indexOf('</script>', scriptTagEnd);
if (scriptEnd === -1) scriptEnd = s.length;
const script = s.slice(scriptTagEnd+1, scriptEnd);
try {
  new Function(script);
  console.log('PARSE_OK');
} catch (e) {
  console.error('Syntax error while parsing script:\n', e && e.stack ? e.stack : e);
  // Print a few context lines around the column if available
  if (e && e.stack) {
    const m = String(e.stack).match(/<anonymous>:(\d+):(\d+)/);
    if (m) {
      const line = Number(m[1]);
      const col = Number(m[2]);
      const lines = script.split('\n');
      const startLine = Math.max(0, line-5);
      const endLine = Math.min(lines.length, line+5);
      console.error('\nContext:');
      for (let i = startLine; i < endLine; i++) {
        const num = (i+1).toString().padStart(4,' ');
        console.error(num + ': ' + lines[i]);
      }
    }
  }
  process.exit(1);
}
