const fs = require('fs');
const vm = require('vm');
const path = 'c:/Users/joshw/OneDrive/Documents/Portfolio/portfolio.html';
const s = fs.readFileSync(path, 'utf8');
let idx = s.indexOf('ReactDOM.createRoot');
if (idx === -1) idx = s.indexOf('(function(){');
if (idx === -1) {
  console.error('Could not find script start');
  process.exit(2);
}
let scriptStart = s.lastIndexOf('<script', idx);
let scriptTagEnd = s.indexOf('>', scriptStart);
let scriptEnd = s.indexOf('</script>', scriptTagEnd);
const script = s.slice(scriptTagEnd+1, scriptEnd);
try {
  new vm.Script(script, {filename: 'portfolio_script.js'});
  console.log('PARSE_OK');
} catch (e) {
  console.error('VM Syntax error:', e.message);
  if (e.stack) console.error(e.stack);
  // attempt to extract line/col from message
  const m = e.message.match(/:(\d+):(\d+)/);
  if (m) {
    const line = Number(m[1]);
    const col = Number(m[2]);
    const lines = script.split('\n');
    const startLine = Math.max(0, line-5);
    const endLine = Math.min(lines.length, line+5);
    console.error('\nContext around error:');
    for (let i = startLine; i < endLine; i++) {
      const num = (i+1).toString().padStart(4,' ');
      console.error(num + ': ' + lines[i]);
    }
  }
  process.exit(1);
}
