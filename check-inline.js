const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'Untitled-1.html'), 'utf8');
const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
if (!scripts || scripts.length === 0) {
  console.error('No script tags found');
  process.exit(1);
}
const scriptContent = scripts[scripts.length - 1].replace(/^<script[^>]*>/i, '').replace(/<\/script>$/i, '');
fs.writeFileSync(path.join(__dirname, 'tmp-inline.js'), scriptContent, 'utf8');
try {
  require('child_process').execFileSync('node', ['--check', path.join(__dirname, 'tmp-inline.js')], { stdio: 'inherit' });
  console.log('Node syntax check passed');
} catch (err) {
  process.exit(1);
}
